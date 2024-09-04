import React, { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Joi from 'joi';
import 'react-toastify/dist/ReactToastify.css';
import loginimg from "../../assets/Images/loginpage.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Define the schema for validation using Joi
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
    }),
    password: Joi.string().min(4).max(100).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 4 characters long",
    }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate the form data
    const { error } = schema.validate(loginInfo, { abortEarly: false });
    if (error) {
      error.details.forEach(err => toast.error(err.message));
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();

      if (!response.ok) {
        return toast.error(result.message || 'Login failed. Please check your credentials.');
      }

      toast.success('Login successful');
      localStorage.setItem('token', result.token);
      localStorage.setItem('loggedInUser', result.name);
      setTimeout(() => navigate('/home'), 1000);
    } catch (err) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center', mt: 10, mb: -5, fontWeight: 700, fontSize: '60px' }}>
        Login Now!
      </Typography>
      <Component>
        <Loginimg>
          <Image src={loginimg} alt="loginimg" />
        </Loginimg>
        <Wrapper onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="filled"
            fullWidth
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            sx={{ marginBottom: "16px" }}
          />
          <Button variant="contained" fullWidth type="submit">
            Login
          </Button>
          <CenteredText variant="body2">OR</CenteredText>
          <Link to='/singup' style={{ textDecoration: 'none' }}>
            <Button variant="outlined" fullWidth>
              Sign up Now
            </Button>
          </Link>
        </Wrapper>
      </Component>
      <ToastContainer />
    </>
  );
};

export default Login;

const Component = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  min-height: 100vh;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Image = styled("img")({
  width: "100%",
  maxWidth: "500px",
  margin: "auto",
  marginRight: "40px",
  display: "block",
  padding: "20px 0",
});

const Loginimg = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Wrapper = styled('form')`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  & > button,
  & > p {
    margin-top: 20px;
  }

  & > * {
    margin-top: 16px;
  }

  @media (max-width: 600px) {
    padding: 15px;

    & > * {
      margin-top: 12px;
    }
  }
`;

const CenteredText = styled(Typography)`
  text-align: center;
  margin: 16px 0;
`;

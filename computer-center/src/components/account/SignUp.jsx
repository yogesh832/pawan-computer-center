import React, { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Joi from 'joi';
import 'react-toastify/dist/ReactToastify.css';
import loginimg from "../../assets/Images/loginpage.png";

// SignUp Component
const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  // Define the schema for validation using Joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be less than 100 characters long",
    }),
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
    setSignUpInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate the form data
    const { error } = schema.validate(signUpInfo, { abortEarly: false });
    if (error) {
      error.details.forEach(err => toast.error(err.message));
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {  // Corrected URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpInfo)
      });

      const result = await response.json();

      if (!response.ok) {
        return toast.error(result.message || 'Sign up failed. Please try again.'); // Updated error message handling
      }

      toast.success('Sign up successful!');
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      toast.error('Sign up failed. Please try again.');
    }
  };

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center', mt: 10, mb: -5, fontWeight: 700, fontSize: '60px' }}>
        Sign Up Now!
      </Typography>
      <Component>
        <Loginimg>
          <Image src={loginimg} alt="loginimg" />
        </Loginimg>
        <Wrapper onSubmit={handleSignUp}>
          <TextField
            label="Name"
            variant="filled"
            fullWidth
            name="name"
            value={signUpInfo.name}
            onChange={handleChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Email"
            variant="filled"
            fullWidth
            name="email"
            value={signUpInfo.email}
            onChange={handleChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            name="password"
            value={signUpInfo.password}
            onChange={handleChange}
            sx={{ marginBottom: "16px" }}
          />
          <Button variant="contained" fullWidth type="submit">
            Sign up Now
          </Button>
          <CenteredText variant="body2">OR</CenteredText>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" fullWidth>
              Login
            </Button>
          </Link>
        </Wrapper>
      </Component>
      <ToastContainer />
    </>
  );
};

export default SignUp;

// Styled components
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

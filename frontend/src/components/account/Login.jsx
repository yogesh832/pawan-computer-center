import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Joi from "joi";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios
import loginimg from "../../assets/Images/loginpage.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    registration: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Define the schema for validation using Joi
  const schema = Joi.object({
    registration: Joi.string().min(7).max(100).allow("").optional().messages({
      "string.min": "Registration number must be at least 7 characters long",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
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
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("your-api-url", loginInfo);
      const result = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", result.token);
        toast.success("Login successful");
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (err) {
      toast.error("Login failed");
    }
  };
  

  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-10 mb-5">Login Now!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
        <div className="w-full md:w-1/2 p-6">
          <img
            src={loginimg}
            alt="loginimg"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <form
          onSubmit={handleLogin}
          className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="registration"
            value={loginInfo.registration}
            onChange={handleChange}
            placeholder="Registration No. (if any)"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

          <p className="text-center mt-4">Don't have an account?</p>
          <Link to="/signup">
            <button
              type="button"
              className="w-full mt-2 bg-white text-blue-600 border-2 border-blue-600 p-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Sign Up Now
            </button>
          </Link>

          <p className="text-center mt-4">Only for Admin</p>
          <Link to="/admin">
            <button
              type="button"
              className="w-full mt-2 bg-white text-blue-600 border-2 border-blue-600 p-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Click Here
            </button>
          </Link>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerRoute } from '../Utils/APIRoutes';
const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      //call apis
      const { username, email, password, confirmPassword } = values;

      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
    }
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      toast.error('password and confirm password should be same', toastOptions);
      return false;
    } else if (username === '') {
      toast.error('Please enter Username', toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error('Password should be more than 8 characters', toastOptions);
      return false;
    } else if (email === '') {
      toast.error('Please enter a valid email', toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='brand'>
            <img src='' alt='' />
            <h1>Chatty</h1>
          </div>
          <input
            type='text'
            placeholder='username'
            name='username'
            onChange={(e) => handleChange(e)}
          />

          <input
            type='email'
            placeholder='email'
            name='email'
            onChange={(e) => handleChange(e)}
          />

          <input
            type='password'
            placeholder='password'
            name='password'
            onChange={(e) => handleChange(e)}
          />

          <input
            type='password'
            placeholder='confirm password'
            name='confirmPassword'
            onChange={(e) => handleChange(e)}
          />
          <button type='submit'>Create User</button>
          <span>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    justify-contents: center;
    gap: 1rem;

    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 1px solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-wight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }

    span {
      color: white;
      text-transform: uppercase;

      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;
export default Register;

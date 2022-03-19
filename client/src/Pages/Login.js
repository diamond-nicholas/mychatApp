import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginRoute } from '../Utils/APIRoutes';
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
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
      const { email, password } = values;

      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }

      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
        console.log(data.user);
        navigate('/');
      }
    }
  };

  const handleValidation = () => {
    const { username, email, password } = values;
    if (email === '') {
      toast.error('Please enter a valid email', toastOptions);
      return false;
    } else if (!password) {
      toast.error('Please enter password', toastOptions);
      return false;
    } else if (username === '') {
      toast.error('Please enter Username', toastOptions);
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

          <button type='submit'>Login User</button>
          <span>
            Don't have an account? <Link to='/register'>Register</Link>
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
export default Login;

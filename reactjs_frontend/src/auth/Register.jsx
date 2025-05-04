import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../client/axios-client';

export default function Register() {
  const navigate = useNavigate();
  
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const {setUser, setToken} = useContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirm: passwordConfirmRef.current.value,
    }
    axiosClient.post('/register', payload).then(({data}) => {
      setUser(data.user)
      setToken(data.token) 
    })
    .catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        console.log(response.data.errors)
      }
    })
  }
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Create Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control `}
                    id="name"
                    name="name"
                    ref={nameRef}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className={`form-control `}
                    id="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control `}
                    id="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Create a password"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control `}
                    id="confirmPassword"
                    name="confirmPassword"
                    ref={passwordConfirmRef}
                    placeholder="Confirm your password"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100" 
                >
                  Sign up
                </button>
                <p className="mb-0 text-center">Already have an account? 
                    <button 
                      type="button" 
                      className="btn btn-link p-0 ms-1"
                      onClick={() => navigate('/register')}
                    >
                      Sign In
                    </button>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

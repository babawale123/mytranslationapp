import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Spinner from '../Component/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from '../action/userAction';
import ErrorMessage from '../Component/Error';
import { useNavigate } from 'react-router-dom';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.02);
  padding: 40px;
  width: 80%; /* Adjust the width as needed */

  @media (min-width: 768px) {
    width: 50%;
    padding: 60px;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const FormButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const LoginSystem = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const userLogin = useSelector((state)=>state.userLogin)
  const {loading,error,userInfo} = userLogin
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email,password))
     };

     useEffect(()=>{
        if(userInfo){
          navigate('/translate')
        }
    
     },[userInfo,navigate])

  return (
    <CenteredContainer>
      <LoginFormContainer>
         {loading && <Spinner size="60px" />}
         {error && <p style={{color:"red"}}>{error}</p>}
        <LoginForm onSubmit={handleLogin}>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormButton type="submit">Login</FormButton>
        </LoginForm>
      </LoginFormContainer>
    </CenteredContainer>
  );
};

export default LoginSystem;

import React from 'react';
import styled from 'styled-components';

const ErrorMessageContainer = styled.div`
  background-color: #ffcccc;
  color: #d9534f;
  border: 1px solid #d9534f;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ErrorMessage = ({ message }) => {
  return <ErrorMessageContainer>{message}</ErrorMessageContainer>;
};

export default ErrorMessage;

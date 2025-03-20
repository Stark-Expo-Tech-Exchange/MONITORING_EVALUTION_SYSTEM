// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(0, 150, 136, 0.8); /* Sample background color */
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to the Mene System</Title>
      <Description>
        Your one-stop solution for managing your tasks efficiently.
      </Description>
      <Button to="/signup">Sign Up Now</Button>
    </HomeContainer>
  );
};

export default Home;

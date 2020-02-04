import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import Carousel from './Carousel';

const SignUpDiv1 = styled.div`
display:flex
margin-top:2%;
margin-bottom:2%

`;
const SignUpDiv2 = styled.div`
  display: flex;
`;

const Images = styled.img`
  width: 30%;
`;

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to KEY !</h1>
      <Carousel />

      <SignUpDiv1>
        <h3>Supporters:</h3>
        <Images src="https://images.unsplash.com/photo-1414445092210-ee1a2da44ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80" />
      </SignUpDiv1>

      <SignUpDiv2>
        <Images src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3734&q=80" />
        <h3>Organizations:</h3>
      </SignUpDiv2>
    </div>
  );
}

//Welcome Page talks about sad burnt up animals

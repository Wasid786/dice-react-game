import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled/button';

const StartGame = ({toggle}) => {
  
  return <Container>
      <img className='img' src="./assets/contact.svg" alt="" />
    <div className='content'>
    <h1>Dice Game</h1>
    <Button 
    onClick={toggle}
    >Play Now</Button>
    </div>
   
    </Container>
};

export default StartGame;

const Container = styled.div `
    max-width: 1180px;
    height: 100vh;
    display: flex;
  align-items: center;
    margin: 0 auto;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

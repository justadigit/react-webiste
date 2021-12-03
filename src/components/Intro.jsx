import React from 'react';
import styled from 'styled-components';
import Woman from '../img/woman.png';
import AnimatedShape from './AnimatedShape';
const Container = styled.div`
  height: calc(100vh - 105px);
  display: flex;
  padding: 10px;
  justify-content: center;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;
const Desc = styled.div`
  font-size: 20px;
  width: 60%;
`;
const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  border: none;
  letter-spacing: 2px;
  font-weight: bold;
  cursor: pointer;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;

  object-fit: cover;
`;
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Advantures in Creative Age</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, neque
          corporis? Laudantium delectus voluptatibus architecto obcaecati fugit
          eaque incidunt magni,{' '}
        </Desc>
        <Info>
          <Button>START A PRODUCT</Button>
          <Contact>
            <Phone>Call Us (095)123 23 23</Phone>
            <ContactText>Far any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShape />
    </Container>
  );
};

export default Intro;

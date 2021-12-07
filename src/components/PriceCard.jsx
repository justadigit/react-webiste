import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    padding: 10px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Type = styled.button`
  margin: 10px 0;
  padding: 10px;
  border: 1.5px solid crimson;
  border-radius: 20px;
  color: crimson;
  background-color: white;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px 0;
    font-size: 13px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  border-radius: 15px;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
    padding: 10px;
  }
`;
const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Craft Template</ListItem>
        <ListItem>Exclusive Spport</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;

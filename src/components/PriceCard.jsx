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
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: bold;
`;
const Type = styled.button`
  margin: 10px 0;
  padding: 10px;
  border: 1.5px solid crimson;
  border-radius: 20px;
  color: crimson;
  background-color: white;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
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

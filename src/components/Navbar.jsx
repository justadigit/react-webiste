import React from 'react';
import styled from 'styled-components';
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: 60px;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  list-style: none;
`;
const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Service</MenuItem>
            <MenuItem>Product</MenuItem>
          </Menu>
        </Left>
        <Button>Contact Now</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

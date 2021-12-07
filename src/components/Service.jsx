import React, { useState } from 'react';
import styled from 'styled-components';
import SERVICE from '../img/service.png';
import MiniCard from './MiniCard';
import Play from '../img/play.png';
const Container = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => (props.open ? 'none' : '')};
  width: 100%;
  height: 100%;
`;
const Video = styled.video`
  display: ${(props) => !props.open && 'none'};
  height: 300px;
  margin: auto;
  position: absolute;

  top: 30vh;
  left: 10vw;
  @media only screen and (max-width: 480px) {
    width: 90%;
    padding: 0;
    margin-left: 0;
  }
`;
const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1``;
const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
    width: 100%;
  }
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: -10;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 30%;
  background-color: white;
  border-radius: 5px;
  border: none;
  padding: 10px;
`;
const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image src={SERVICE} open={open} />
        <Video
          open={open}
          autoplay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            perspiciatis inventore quam, dolore architecto velit molestiae
            reiciendis molestias in eaque beatae distinctio impedit nesciunt qui
            consectetur voluptatem dolor aliquid adipisci fuga sit ab
            repellendus odit quasi. Iste labore, optio reiciendis sit harum
            voluptates nobis, magni ipsa animi consectetur vero aspernatur.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
            autoplay
            loop
            controls
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;

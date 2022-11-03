import React from "react";
import styled from "styled-components";

import img1 from "../assets/Nfts/bighead-1.png";
import img2 from "../assets/Nfts/bighead-2.png";
import img3 from "../assets/Nfts/bighead-3.png";
import img4 from "../assets/Nfts/bighead-4.png";
import img5 from "../assets/Nfts/bighead-5.png";
import img6 from "../assets/Nfts/bighead-6.png";
//import banner from "../assets/Nfts/banner.jpeg";

const Section = styled.section`
  height: 25rem;
  width: 100vw;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  img {
    width: 15rem;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;

  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
`;

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
`;

const JoiNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2 ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const projectName = "The Cool Foxes";
const Banner = () => {
  return (
    <Section>
      <ImageContainer>
        <img src={img1} alt={projectName} />
        <img src={img2} alt={projectName} />
        <img src={img3} alt={projectName} />
        <img src={img4} alt={projectName} />
        <img src={img5} alt={projectName} />
        <img src={img6} alt={projectName} />
      </ImageContainer>
      <Title>
        Join the <br /> foxes club
      </Title>
      <BtnContainer>
        <JoiNow>Join Now</JoiNow>
      </BtnContainer>
    </Section>
  );
};

export default Banner;

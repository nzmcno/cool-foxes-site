import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../assets/Nfts/logo.png";
const projectName = "Puffsterz";

const LogoText = styled.h1`
  font-family: Arial, cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body}; //carouselColor
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  z-index: 5;
  backdrop-filter: blur(4px);

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const LogoComponent = ({ img, name = "", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
    </Item>
  );
};

const Round = styled.div`
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Logom = styled.img`
  display: inline-block;
  outline: none;
  border: none;

  width: 70px;
  height: 70px;
  margin: 15px;
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
    border: 2 px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
`;
const Logo = () => {
  return (
    // <LogoComponent img={img1} name={projectName} position="" />
    <Logom src={img1} />

    // <LogoText>
    //   <Link to="/">PC</Link>
    // </LogoText>
  );
};

export default Logo;

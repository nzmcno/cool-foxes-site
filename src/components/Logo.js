import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../assets/Nfts/logo.png";

const Logom = styled.img`
  display: inline-block;
  outline: none;
  border: none;

  width: 65px;
  height: 65px;
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

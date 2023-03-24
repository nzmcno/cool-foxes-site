import React, { useState } from "react";

import styled from "styled-components";
import wave from "../assets/wave.png";
import music from "../assets/music.png";

const StyledMusicButton = styled.button`
  background-color: #fff;
  position: relative;
  display: inline-block;
  margin-right: 0;
  border: none;
  border-radius: 50%;
  width: 65px;
  height: 65px;

  cursor: pointer;
  transition: all 0.2 ease;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
  }
`;

const MusicLogo = styled.img`
  width: 50%;
`;

const WaveLogo = styled.img`
  width: 50%;
`;

const MusicButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledMusicButton onClick={handleClick}>
      {isActive ? (
        <WaveLogo src={wave} alt="Wave Icon" />
      ) : (
        <MusicLogo src={music} alt="Music Icon" />
      )}
    </StyledMusicButton>
  );
};

export default MusicButton;

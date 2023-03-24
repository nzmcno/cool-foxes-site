import React, { useState, useEffect } from "react";
import styled from "styled-components";
import wave from "../assets/wave.png";
import music from "../assets/music.png";
import playlist from "./playlist2";

import useSound from "use-sound";

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
  const [isActive, setIsActive] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [play, { stop }] = useSound(playlist[currentSongIndex], {
    interrupt: true,
    onend: () => {
      // switch to the next song when current song ends
      setCurrentSongIndex((currentSongIndex + 1) % playlist.length);
    },
  });

  useEffect(() => {
    if (isActive) {
      play();
    } else {
      stop();
    }
  }, [isActive, play, stop]);

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

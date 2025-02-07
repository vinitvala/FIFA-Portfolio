import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import pitchBackground from '../assets/pitch-background.jpg'; // Background image
import coinImage from '../assets/coin.jpg'; // Import coin image
import fifaSong from '../assets/fifa-song.mp3'; // Single song to play

// Styled Components
const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background: url(${pitchBackground}) center/cover no-repeat;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-left: 200px;
  z-index: 2;
  overflow-y: auto;
  padding: 2rem;
  padding-top: 4rem;
  position: relative;
`;

const MusicControls = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MuteButton = styled.button`
  background: ${({ theme }) => theme.colors.accent || '#00ff80'};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.text || '#fff'};
    color: ${({ theme }) => theme.colors.accent || '#00ff80'};
  }
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  z-index: 20;
`;

const Coins = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent || '#00ff80'};
  }
`;

const Layout = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  // useEffect(() => {
  //   // Play the song when the component mounts
  //   if (audioRef.current) {
  //     audioRef.current.play().catch((err) => {
  //       console.log('Autoplay prevented:', err);
  //     });
  //   }
  // }, []);
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1; // Set full volume
    }
  }, []);
  
  return (
    <LayoutContainer>
      <TopBar>
        <Coins>
          <img src={coinImage} alt="Coin Icon" />
          <span>1200</span>
        </Coins>
      </TopBar>

      <Navigation />
      <ContentContainer>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </ContentContainer>
      <MusicControls>
        <audio ref={audioRef} src={fifaSong} autoPlay loop />
        <MuteButton onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </MuteButton>
      </MusicControls>
    </LayoutContainer>
  );
};

export default Layout;
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profileImage from '../assets/profile.jpg'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content towards the top */
  align-items: center;
  min-height: calc(100vh - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 10rem; /* Add space from the top to adjust the vertical alignment */
`;


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`

const ProfileImageWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 26, 0.2),
      rgba(26, 26, 26, 0.4)
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    height: 200px;
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Tagline = styled(motion.p)`
  font-size: 2.2rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
`

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Home = () => {
  return (
    <HomeContainer>
      <ContentWrapper>
        <Title
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Vinit Vala
        </Title>
        <ProfileImageWrapper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileImage src={profileImage} alt="Vinit Vala" />
        </ProfileImageWrapper>
        <Tagline
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          "Every player starts as a rookie. Every champion builds their legacy. Welcome to my career mode!"
        </Tagline>
        <SocialLinks
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SocialLink 
            href="https://github.com/vinitvala" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink 
            href="https://linkedin.com/in/vinitvala" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </SocialLinks>
      </ContentWrapper>
    </HomeContainer>
  )
}

export default Home

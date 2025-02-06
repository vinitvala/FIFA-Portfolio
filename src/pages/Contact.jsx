import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`

const SocialIcon = styled(motion.a)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <SocialLinks>
        <SocialIcon
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
      </SocialLinks>
    </ContactContainer>
  )
}

export default Contact

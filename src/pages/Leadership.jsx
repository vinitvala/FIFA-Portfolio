import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTrophy, FaUsers, FaStar } from 'react-icons/fa'
import event1 from '../assets/hsc-event1.jpg'
import event2 from '../assets/hsc-event2.jpg'

const Container = styled.div`
  padding: 2rem;
  max-width: 1500px;
  margin: 0 auto;
`

const Section = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  padding: 4rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 6px solid ${({ theme }) => theme.colors.accent};
  max-width: 100%;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
  font-size: 2.5rem; 
`

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
`

const RoleCard = styled.div`
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  border: 2px solid #ffd700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const RoleTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
`

const RoleBadge = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1.4rem;
`

const StatGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
`

const StatValue = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.6rem;
  font-weight: ${({ highlight }) => (highlight ? 'bold' : 'normal')};
`

const RoleDescription = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: #fff;
`

const Achievement = styled.li`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: "►";
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 1rem;
    flex-shrink: 0;
  }
`

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const EventImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid rgba(255, 215, 0, 0.3);
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageCaption = styled.div`
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  opacity: 0.8;
`

const Leadership = () => {
  return (
    <Container>
      <Section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Captains</Title>

        <RoleCard>
          <RoleHeader>
            <RoleTitle>Hindu Students Council</RoleTitle>
            <RoleBadge>
              <FaTrophy />
              Club Captain
            </RoleBadge>
          </RoleHeader>
          
          <StatGrid>
            <Stat>
              <StatLabel>
                <FaUsers />
                Community Impact
              </StatLabel>
              <StatValue highlight>1000+</StatValue>
            </Stat>
            <Stat>
              <StatLabel>
                <FaStar />
                Budget Growth
              </StatLabel>
              <StatValue highlight>+20%</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Position</StatLabel>
              <StatValue>President</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Season</StatLabel>
              <StatValue>2022-Present</StatValue>
            </Stat>
          </StatGrid>

          <RoleDescription>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <Achievement>
                Pioneering service initiatives and workshops, while collaborating with non-profit organizations to foster cultural awareness and community engagement, impacting more than 1,000 students and community members.
              </Achievement>
              <Achievement>
                Spearheading meticulous financial management by cost-saving measures and funding through grants to increase budget by 20%, on large-scale events promoting Hindu culture.
              </Achievement>
            </ul>

            <ImageGallery>
              <ImageContainer>
                <EventImage 
                  src={event1} 
                  alt="HSC Event 1"
                  loading="lazy"
                />
                <ImageCaption>Ganesh Chaturthi 2024</ImageCaption>
              </ImageContainer>
              <ImageContainer>
                <EventImage 
                  src={event2} 
                  alt="HSC Event 2"
                  loading="lazy"
                />
                <ImageCaption>Navratri Celebration</ImageCaption>
              </ImageContainer>
            </ImageGallery>
          </RoleDescription>
        </RoleCard>

        {/* Placeholder Card */}
        <RoleCard style={{ opacity: 0.7 }}>
          <RoleHeader>
            <RoleTitle>Coming Soon</RoleTitle>
            <RoleBadge>
              <FaTrophy />
              Vice Captain
            </RoleBadge>
          </RoleHeader>
          
          <StatGrid>
            <Stat>
              <StatLabel>
                <FaUsers />
                Position
              </StatLabel>
              <StatValue>TBA</StatValue>
            </Stat>
            <Stat>
              <StatLabel>
                <FaStar />
                Impact
              </StatLabel>
              <StatValue>TBA</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Season</StatLabel>
              <StatValue>TBA</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Rating</StatLabel>
              <StatValue>TBA</StatValue>
            </Stat>
          </StatGrid>
        </RoleCard>

      </Section>
    </Container>
  )
}

export default Leadership

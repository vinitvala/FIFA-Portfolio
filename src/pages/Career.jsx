import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaStar, FaCode, FaChartLine } from 'react-icons/fa'

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
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
`

const CareerCard = styled.div`
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
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
`

const RoleTitle = styled.h3`
  color: #ffd700;
  font-size: 2rem;
  font-weight: bold;
`

const RoleBadge = styled.div`
  background: linear-gradient(145deg, #ffd700, #b8860b);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #000;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
`

const Stat = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StatLabel = styled.span`
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const StatValue = styled.span`
  color: ${({ highlight }) => highlight ? '#ffd700' : '#fff'};
  font-weight: bold;
  font-size: 1.4rem;
`

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`

const Achievement = styled.li`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #fff;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: "►";
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 1rem;
    flex-shrink: 0;
  }
`

const Career = () => {
  return (
    <Container>
      <Section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Player Career Mode</Title>

        <CareerCard>
          <RoleHeader>
            <RoleTitle>Research Intern - Politech</RoleTitle>
            <RoleBadge>
              <FaTrophy />
              Virtually Integrated Project
            </RoleBadge>
          </RoleHeader>
          
          <StatGrid>
            <Stat>
              <StatLabel>
                <FaChartLine />
                Sentiment Analysis
              </StatLabel>
              <StatValue highlight>91%</StatValue>
            </Stat>
            <Stat>
              <StatLabel>
                <FaStar />
                Prediction Improvement
              </StatLabel>
              <StatValue highlight>+10%</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Season</StatLabel>
              <StatValue>2023-2024</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Club</StatLabel>
              <StatValue>Politech Team at SBU</StatValue>
            </Stat>
          </StatGrid>

          <Achievements>
            <Achievement>Maintained and enhanced the Automated Reporting System (ARS) using Python and Git, analyzing election demographic data, which contributed to key political informatics research within the Politech team.</Achievement>
            <Achievement>Conducted comprehensive social media data analysis to assess the influence of social media on electoral outcomes.</Achievement>
            <Achievement>Achieved 91% accuracy in sentiment analysis, effectively analyzing tweet polarity by state, providing actionable insights that improved election data trend predictions by 10%.</Achievement>
          </Achievements>
        </CareerCard>

        <CareerCard>
          <RoleHeader>
            <RoleTitle>Honors Research Assistant</RoleTitle>
            <RoleBadge>
              <FaTrophy />
              Research
            </RoleBadge>
          </RoleHeader>
          
          <StatGrid>
            <Stat>
              <StatLabel>
                <FaCode />
                Deep Learning
              </StatLabel>
              <StatValue highlight>Advanced</StatValue>
            </Stat>
            <Stat>
              <StatLabel>
                <FaStar />
                Professor
              </StatLabel>
              <StatValue highlight>Robert Kelly</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Season</StatLabel>
              <StatValue>2024</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Department</StatLabel>
              <StatValue>Computer Science</StatValue>
            </Stat>
          </StatGrid>

          <Achievements>
            <Achievement>Developed an advanced deep learning and transformer-based model to classify and detect misinformation related to U.S. elections, enhancing accuracy in identifying false information.</Achievement>
            <Achievement>Integrated and evaluated various deep learning classifiers under the mentorship of Professor Robert Kelly using Python and TensorFlow to refine model efficacy and performance.</Achievement>
            <Achievement>Conducted rigorous comparative analysis against established benchmark models, achieving superior performance in real-time misinformation detection, thereby contributing to the potential application in election integrity.</Achievement>
          </Achievements>
        </CareerCard>

        <CareerCard>
          <RoleHeader>
            <RoleTitle>Teaching Assistant</RoleTitle>
            <RoleBadge>
              <FaUsers />
              Mentor
            </RoleBadge>
          </RoleHeader>
          
          <StatGrid>
            <Stat>
              <StatLabel>
                <FaUsers />
                Students Mentored
              </StatLabel>
              <StatValue highlight>200+</StatValue>
            </Stat>
            <Stat>
              <StatLabel>
                <FaChartLine />
                Score Improvement
              </StatLabel>
              <StatValue highlight>+5%</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Season</StatLabel>
              <StatValue>2023</StatValue>
            </Stat>
            <Stat>
              <StatLabel>Professor</StatLabel>
              <StatValue>Pramod Ganapathi</StatValue>
            </Stat>
          </StatGrid>

          <Achievements>
            <Achievement>Assisted in teaching foundational concepts of Computer Science, including functions, relations, and recursion, to enhance students' understanding and academic performance, resulting in a 5% increase in average exam scores.</Achievement>
            <Achievement>Organized and conducted weekly lab sessions, providing hands-on support and guidance to over 200 students with assignments and coursework.</Achievement>
          </Achievements>
        </CareerCard>

      </Section>
    </Container>
  )
}

export default Career

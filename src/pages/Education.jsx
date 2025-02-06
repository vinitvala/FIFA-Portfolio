import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import sbuLogo from '../assets/sbu-logo.jpg'

const Container = styled.div`
  padding: 2rem;
  max-width: 1500px;
  margin: 0 auto;
`

const Section = styled.div`
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

const UniversitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const UniversityLogo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`

const UniversityInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const University = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  text-align: center;
`

const Details = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
`

const List = styled.ul`
  list-style: none;
  margin-left: 1rem;
  font-size: 1.6rem;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 0.5rem;
  }
`

const StarRating = styled.div`
  display: flex;
  gap: 0.5rem;
  color: gold;
  font-size: 2rem;
`

const StatsContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 2rem;
`

const MajorTitle = styled.div`
  font-size: 2rem;
  color: gold;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
`

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`

const StatLabel = styled.span`
  color: #fff;
  font-size: 1.4rem;
`

const StatValue = styled.span`
  color: ${({ highlight }) => highlight ? '#ffd700' : '#fff'};
  font-weight: bold;
  font-size: 1.4rem;
`

const AchievementSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`

const AchievementTitle = styled.h4`
  color: gold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const Education = () => {
  return (
    <Container>
      <Section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Education</Title>
        
        <UniversitySection>
          <University>Stony Brook University - New York, USA</University>
          <UniversityLogo 
            src={sbuLogo}
            alt="Stony Brook University Logo"
          />
          <StarRating>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </StarRating>
        </UniversitySection>

        <StatsContainer>
          <MajorTitle>Double Major Specialist</MajorTitle>
          
          <StatGrid>
            <StatItem>
              <StatLabel>Primary Major</StatLabel>
              <StatValue highlight>Computer Science</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Secondary Major</StatLabel>
              <StatValue>Applied Mathematics</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Season</StatLabel>
              <StatValue>2021-2025</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Division</StatLabel>
              <StatValue>Dean's List Elite</StatValue>
            </StatItem>
          </StatGrid>

          <AchievementSection>
            <AchievementTitle>Coursework</AchievementTitle>
            <StatGrid>
              <StatItem>
                <StatLabel>Data Structures</StatLabel>
                <StatValue>94</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Analysis of Algorithms</StatLabel>
                <StatValue>92</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Software Development</StatLabel>
                <StatValue>88</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Object Oriented Programming</StatLabel>
                <StatValue>97</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Machine Learning</StatLabel>
                <StatValue>89</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Natural Language Processing</StatLabel>
                <StatValue>83</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Intro to Artificial Intelligence</StatLabel>
                <StatValue>85</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Programming Abstractions</StatLabel>
                <StatValue>78</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Financial Mathematics</StatLabel>
                <StatValue>82</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Data Science</StatLabel>
                <StatValue>83</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Data Mining</StatLabel>
                <StatValue>81</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Computer Networks</StatLabel>
                <StatValue>84</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Graph Theory</StatLabel>
                <StatValue>86</StatValue>
              </StatItem>
            </StatGrid>
          </AchievementSection>

          <AchievementSection>
            <AchievementTitle>Achievements</AchievementTitle>
            <StatItem>
              <StatLabel>Dean's List Appearances</StatLabel>
              <StatValue highlight>7 Consecutive Seasons</StatValue>
            </StatItem>
          </AchievementSection>
        </StatsContainer>
      </Section>
    </Container>
  )
}

export default Education

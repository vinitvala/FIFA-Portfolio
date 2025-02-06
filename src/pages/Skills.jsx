import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.6rem;
`

const SkillCard = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  padding: 1.5rem;
  border-radius: 8px;
  background: ${({ rating }) => {
    if (rating >= 80) return 'linear-gradient(145deg, #ffdc82, #d4af37)'; // Gold
    if (rating >= 65) return 'linear-gradient(145deg, #C0C0C0, #808080)'; // Silver
    return 'linear-gradient(145deg, #cd7f32, #a0522d)'; // Bronze
  }};
  color: #000;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Rating = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 2rem;
  font-weight: bold;
`

const SkillName = styled.div`
  margin-top: 1.5rem;
  font-size: 1.6rem;
  font-weight: bold;
`

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

const Skills = () => {
  const skillsData = {
    Languages: [
      { name: 'JavaScript', rating: 85 },
      { name: 'Python', rating: 95 },
      { name: 'Java', rating: 90 },
      { name: 'HTML/CSS', rating: 84 },
      { name: 'SQL', rating: 75 },
      { name: 'C', rating: 71 },
      { name: 'OCaml', rating: 65 },
      { name: 'MIPS', rating: 60 },
    ],
    'Frameworks & Tools': [
      { name: 'React.js', rating: 86 },
      { name: 'Node.js', rating: 80 },
      { name: 'Git', rating: 85 },
      { name: 'Pandas', rating: 81 },
      { name: 'Tensorflow', rating: 70 },
      { name: 'Pytorch', rating: 72 },
      { name: 'MySQL', rating: 80 },
      { name: 'MongoDB', rating: 72 },
      { name: 'Linux', rating: 74 },
    ],
  };

  return (
    <Container>
      <Section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Technical Skills</Title>
        
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {skills.map((skill) => (
                <SkillCard key={skill.name} rating={skill.rating}>
                  <Rating>{skill.rating}</Rating>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </Section>
    </Container>
  );
};

export default Skills

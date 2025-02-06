import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaGithub, FaLink } from 'react-icons/fa'

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
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
`

const InfoText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  margin-bottom: 2rem;
  font-style: italic;
  opacity: 0.8;
`

const ProjectCard = styled.div`
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  border: 2px solid ${({ type }) => {
    switch (type) {
      case 'fullstack': return '#ffd700';
      case 'ml': return '#c0c0c0';
      case 'algorithm': return '#cd7f32';
      default: return '#ffd700';
    }
  }};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
`

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`

const ProjectType = styled.span`
  background: ${({ type }) => {
    switch (type) {
      case 'fullstack': return 'linear-gradient(145deg, #ffd700, #b8860b)';
      case 'ml': return 'linear-gradient(145deg, #c0c0c0, #808080)';
      case 'algorithm': return 'linear-gradient(145deg, #cd7f32, #8b4513)';
      default: return 'linear-gradient(145deg, #ffd700, #b8860b)';
    }
  }};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #000;
  font-weight: bold;
  font-size: 1.4rem;
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
`

const StatValue = styled.span`
  color: ${({ highlight }) => highlight ? '#ffd700' : '#fff'};
  font-weight: bold;
  font-size: 1.4rem;
`

const ProjectDescription = styled(motion.div)`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: #fff;
`

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const FeatureList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`

const FeatureItem = styled.li`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: "►";
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 1rem;
  }
`

const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-size: 1.4rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

const Projects = () => {
  const [expandedProject, setExpandedProject] = React.useState(null);

  const projectData = {
    questnest: {
      title: "QuestNest",
      type: "fullstack",
      stats: {
        techStack: "MERN",
        userRating: "95",
        frontend: "React",
        backend: "Node.js"
      },
      description: "A full-stack web application for enhancing student housing search experience.",
      features: [
        "Developed a full-stack web application in JavaScript using the React framework for the Front-end to enhance user interactivity, and MongoDB for flexible data handling, achieving a 95% user satisfaction rate based on feedback.",
        "Engineered the Back-end with Node.js and Express framework, enabling efficient server-side routing, while handling of concurrent client requests leveraging asynchronous features, resulted in improvement in response time."
      ],
      links: {
        github: "https://github.com/vinitvala/QuestNest"
      }
    },
    fatalforce: {
      title: "Fatal Force: Institutional Discrimination",
      type: "ml",
      stats: {
        accuracy: "92%",
        techStack: "Python ML",
        analysis: "Pandas/NumPy",
        visualization: "Matplotlib"
      },
      description: "Machine learning analysis of institutional discrimination in Law Enforcement.",
      features: [
        "Analyzed institutional discrimination in Law Enforcement by performing exploratory data analysis using Python libraries like Pandas, Numpy, Matplotlib, and Seaborn to dissect and derive meaningful insights from complex datasets.",
        "Implemented predictive modeling using ML classifiers like KNN, decision tree, and multiple logistic regression. Evaluated model performance using accuracy, precision, and recall, to achieve a modelling accuracy of 92%."
      ],
      links: {
        github: "https://github.com/vinitvala/Fatal-Force"
      }
    },
    islandnetwork: {
      title: "Island Network",
      type: "algorithm",
      stats: {
        language: "Java",
        algorithm: "DFS/Dijkstra",
        optimization: "Ford-Fulkerson",
        performance: "O(VE²)"
      },
      description: "Java-based simulation tool for optimal travel path calculation.",
      features: [
        "Developed a Java-based simulation tool using data structures to calculate optimal travel paths based on input lists of cities and roads, each with specified car carrying capacities per minute.",
        "Implemented DFS and Ford-Fulkerson Algorithm to find the maximum flow between two cities, and implemented Dijkstra's Algorithm to provide efficient route planning."
      ],
      links: {
        github: "https://github.com/vinitvala/Fatal-Force"
      }
    },
    wolfpack: {
      title: "WolfPack Network Toolkit",
      type: "algorithm",
      stats: {
        language: "C",
        algorithm: "Packet Processing",
        optimization: "Checksum",
        DataStructures: "Maps, Queues, Stacks"
      },
      description: "A C-based networking tool for simulating and processing network packets using a custom protocol.",
      features: [
        "Engineered packet parsing system that extracts and displays 8 header fields in hexadecimal format, with payload presentation in ASCII, enabling detailed network packet analysis.",
        "Implemented efficient data structures (maps, queues, stacks) and algorithms for packet processing, including checksum validation and packet reconstruction, ensuring data integrity and optimal memory management."
      ],
      links: {
        github: "https://github.com/vinitvala/Fatal-Force"
      }
    },
  };

  return (
    <Container>
      <Section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Career Highlights</Title>
        <InfoText>*Click on each project for more info</InfoText>
        
        {Object.entries(projectData).map(([key, project]) => (
          <ProjectCard 
            key={key}
            type={project.type}
            onClick={() => setExpandedProject(expandedProject === key ? null : key)}
          >
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectType type={project.type}>
                {project.type === 'fullstack' ? 'Full Stack' : 
                 project.type === 'ml' ? 'Machine Learning' : 'Algorithms'}
              </ProjectType>
            </ProjectHeader>
            
            <StatGrid>
              {Object.entries(project.stats).map(([statKey, value]) => (
                <Stat key={statKey}>
                  <StatLabel>{statKey.charAt(0).toUpperCase() + statKey.slice(1)}</StatLabel>
                  <StatValue highlight={statKey === 'techStack' || statKey === 'accuracy' || statKey === 'language'}>
                    {value}
                  </StatValue>
                </Stat>
              ))}
            </StatGrid>

            <AnimatePresence>
              {expandedProject === key && (
                <ProjectDescription
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Description>{project.description}</Description>
                  <FeatureList>
                    {project.features.map((feature, index) => (
                      <FeatureItem key={index}>{feature}</FeatureItem>
                    ))}
                  </FeatureList>
                  <LinkContainer>
                    <ProjectLink href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </ProjectLink>
                  </LinkContainer>
                </ProjectDescription>
              )}
            </AnimatePresence>
          </ProjectCard>
        ))}
      </Section>
    </Container>
  );
};

export default Projects;

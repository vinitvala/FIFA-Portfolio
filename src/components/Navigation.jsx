import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  width: 320px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  z-index: 10; /* Ensure it is above the faded background */
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin-top: 2rem;
`

const NavItem = styled(motion.li)`
  position: relative;
`


const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  color: #fff;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent || '#00ff80'};
    transform: scale(1.05);
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent || '#00ff80'};
    font-weight: bold;
  }
`

const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  padding: 2rem;
  line-height: 1.4;
`

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Kick-Off' },
    { path: '/career', label: 'Player Career' },
    { path: '/skills', label: 'Skills' },
    { path: '/education', label: 'Clubs' },
    { path: '/projects', label: 'Projects' },
    { path: '/leadership', label: 'Captains' }
  ]

  return (
    <Nav>
      <Logo>Portfolio FC25</Logo>
      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <StyledNavLink to={item.path}>
              {item.label}
            </StyledNavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  )
}

export default Navigation

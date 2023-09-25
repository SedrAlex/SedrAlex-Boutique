import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import NavBar from '../components/NavBar'
import Logo from '../components/Logo'
const Section = styled.section`
 position: relative;
 min-height: 100vh;
 overflow:hidden;
`



const Home = () => {
  return (
    <Section id = "home">
      <Logo />
      <CoverVideo />
      <NavBar />

    
    </Section>
  )
}

export default Home
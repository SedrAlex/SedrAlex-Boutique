import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import MainVideo from '../assets/Sed.mp4'

const VideoContainer = styled(motion.div)`


width:  100%;
height: 100vh;
position: relative;

video{
      width: 100%;
      height: 100vh;
      object-fit: cover;
       
      @media (max-width: 48) {
      object-position: center 10%;
       }
     }
      @media (max-width: 30em) {
        object-position: center 50%;
      }
   

`;

const DarkOverlay = styled.div`
position:absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props  => `rgba(${props.theme.bodyRgba},0.6)`};
`
const Title = styled(motion.dev)`
position:absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display:flex;
flex-direction:column;
justify-content:center ;
align-items:center;
color: ${props => props.theme.text};

h1{
  font-family:'Kaushan Script';
  font-size: ${props => props.theme.fontBig};
  text-shadow: 1 px 1px 1px ${props =>props.theme.body};
  @media (max-width: 80em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
h2{
  font-family: "Sirin Stencil";
  font-size: ${props => props.theme.fontlg};
  text-shadow: 1 px 1px 1px ${props =>props.theme.body};
  font-weight:300;
  text-transform: capitalize;

  @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
}
div{
  display:flex;
  flex-direction:row
}
`
const container = {
  hidden: {
    opacity: 0,
  },
  show: { 
    opacity: 1,
    
    transition:{
      delayChildren:  5,
      staggerChildren:0.3  , 
}
  },
}


const item = {
  hidden: {
    opacity: 0,
  },
  show: { 
    opacity: 1,
  },
}

const CoverVideo = () => {
  return (
    <VideoContainer>
<DarkOverlay />
<Title variants = {container} initial= "hidden" animate ="show">
    <div>
        <motion.h1 variants={item} data-scroll data-scro ll-delay = "0.18" data-scroll-speed = '4'>S</motion.h1>
        <motion.h1 variants={item} data-scroll data-scroll-delay = "0.18" data-scroll-speed = '4'>e</motion.h1>
        <motion.h1 variants={item} data-scroll data-scroll-delay = "0.15" data-scroll-speed = '4'>d</motion.h1>
        <motion.h1 variants={item} data-scroll data-scroll-delay = "0.14" data-scroll-speed = '4'>r</motion.h1>
        <motion.h1 variants={item} data-scroll data-scroll-delay = "0.13" data-scroll-speed = '4'> A</motion.h1>
        <motion.h1 variants={item} data-scroll data-scroll-delay = "0.09"  data-scroll-speed = '4'>l</motion.h1>
        <motion.h1 variants={item} data-scroll data-scroll-delay = "0.06"  data-scroll-speed = '4'>e</motion.h1>
        <motion.h1 variants={item} data-scroll data-scroll-delay = "0.04"  data-scroll-speed = '4'>x</motion.h1>


    </div>
    <motion.h2 variants={item} data-scroll data-scroll-delay = "0.04"  data-scroll-speed = '2'>Créateurs De Rêves </motion.h2>

</Title>
       <video src={MainVideo} type="video/mp4" autoPlay muted loop /> 
   </VideoContainer>
  )
}

export default CoverVideo
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import sedra from '../assets/Svgs/SLR.svg'
import img from '../assets/Images/KO.jpeg'
import img1 from '../assets/Images/lp.jpeg'
import img2 from '../assets/Images/wer.jpeg'

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image:url(${img}), url(${img1}),url(${img2});
  background-position: right bottom, left top , center;
  background-repeat: no-repeat, no-repeat;
   width: 100%;
  
@media (max-width: 100em) {
  width:100vw
      }

`;
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxxxxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxxl};
  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
      >      
      {/* <img src={sedra} alt="SedrAlex" />  */}

      
      <Text variants={textVariants} initial="hidden" animate="visible">
      SedrAlex      
      </Text>
    </Container>
  );
};

export default Loader;


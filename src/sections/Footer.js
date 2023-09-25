import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Svgs/download.svg';
import img from '../assets/Images/llp.jpeg'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { computeHeadingLevel } from '@testing-library/react';

const Section  = styled.div`
min-height: 100vh;
width: 100vw;
margin: 5rem auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:rgba(136, 165, 191);
//background-image:url(${img});
background-size:contain, cover;
color: ${props => props.theme.text};

position: relative;
`
const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width:10vw;
    height: auto;
}
h3{
 
     font-size: ${props => props.theme.fontx1};
     font-family: 'Kaushan Script';

     @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }

}
`
const FooterComponent = styled(motion.footer)`
width: 80vw;
@media (max-width: 48em) {
      width: 90vw;
    }

ul{
 list-style-type:  none;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 margin: 2rem;
 margin-top: 4rem;
 padding: 0 1rem;
 border-top: 1px solid ${props => props.theme.text};
 border-bottom: 1px solid ${props => props.theme.text};

 @media (max-width: 48em) {
       
      justify-content: center;
    }

}
li{
    padding: 2rem;
    font-size:${props => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
}
`
const Bottom = styled.div`
padding: 0.5rem 0;
margin: 0 4 rem;
font-size: ${props => props.theme.fontlg};

display:flex;
justify-content:space-between;
align-items: center;

a {
    text-decoration: underline;
  }
  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width:100%; 
    margin: 0;
    span {
      transform: none !important;
    }
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;


const  Footer = () => {
    const{scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
         let elem = document.querySelector(id);

         scroll.scrollTo(elem,
            {
                offset:'-100',
                duration:'2000',
                easing:[0.25,0.0, 0.35,1.0]
            }
            )
    }
  return (
    <Section>
          <LogoContainer>
                 <img 
                    
                data-scroll data-scroll-speed="2" 

                 src = {Logo} alt="SedrAlex"/>
            <h3 data-scroll data-scroll-speed="-1">SedrAlex</h3>
          </LogoContainer>
          <FooterComponent
          initial = {{y: "-400px"}}
          whileInView = {{y:0}}
          viewport={{once:false}}
          transition={{
              duration:1.5
          }}
          >
             <ul>
                <li onClick={() => handleScroll('#home')}>Page d'Accueil</li>
                <li onClick={() => handleScroll('.about')}> À propos</li>
                <li onClick={() => handleScroll('#shop')}>Boutique</li>
                <li onClick={() => handleScroll('#new-arrival')}>Nouvelle Arrivee</li>
                <li>
                    <a href="http://google.com" target="_blank" rel = "noreferrer">
                        look book
                    </a>
                </li>
                <li>
                    <a href="http://google.com" target="_blank" rel = "noreferrer">
                    Commentaires
                    </a>
                </li>

             </ul>
            <Bottom>
                 <span 
                 data-scroll data-scroll-speed="2"  data-scroll-direction="horizontal" 
                 >&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
                 <span
                 data-scroll data-scroll-speed="-2"  data-scroll-direction="horizontal" 
                 >Made With &hearts; by Sedra Mhanna
                    
                 </span>

            </Bottom>

          </FooterComponent>
        </Section>
  )
}

export default Footer
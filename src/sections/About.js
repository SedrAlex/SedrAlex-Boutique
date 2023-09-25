import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/Images/1.jpeg';
import img2 from '../assets/Images/3.jpeg'
import img3  from '../assets/Images/3.png'


const Section = styled.section`
background-color: rgba(136, 165, 191);
position: relative;
min-height: 100vh;
width: 80vw;
display:flex;
@media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
margin: 0 auto;
`
const Title = styled.h1`
font-size:${props => props.theme.fontBig};
font-family: 'Kaushan Script';
font-weight: 100; 
color: white;
position:absolute;
top: 1rem;
left: 2%;
z-index: 5;

span {
    display: inline-block;
  }
  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;



const Left = styled.div`
width: 50%;
font-size:${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index:5;
margin-top: 20%;

@media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
  
`;  
const Right = styled.div`
width: 50%;
position: relative;
img{
     width:100%;
     height: auto;
}
.small-img-1{
    width:40%;
    position: absolute;
    right: 70%;
    bottom: 10%;
}
.small-img-2{
    width:40%;
    position: absolute;
    left: 80%;
    top: 30%;
}
@media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;
const About = () => {
  return (
    <Section id = "fixed-target" className="about">
        <Title data-scroll data-scroll-speed = "-2 " data-scroll-direction="horizontal">
        À PROPOS


        </Title>
    <Left data-scroll data-scroll-stickey data-scroll-target="#fixed-target">
    Nous sommes un studio de mode basé à paris. 
Nous créons des designs uniques qui vous épateront. Nous concevons également des pièces de joaillerie uniques.
La mode est un ART qui ne peut être saisi par tout le monde.
<br />
<br />
Nous sommes très dévoués à fabriquer nos produits.
Nous offrons des produits uniques et créatifs à un large éventail de personnes.
Nous avons une variété de styles, mais pour la plupart des gens, toutes les options sont dans la boîte.
Nous sommes spécialisés dans la fabrication de choses qui vous rendent heureux.
<br />
<br />
Nous nous efforçons de bâtir sur notre vision. En tant que marque  de mode, nous faisons de notre mieux pour créer des expériences incroyables pour tous.
Nous cherchons toujours à faire quelque chose qui soit facile pour tout le monde.
    </Left>
    <Right>
        <img src={img1} alt = "About Us"  />
        <img 
         data-scroll
         data-scroll-speed="5"
           src={img2} className="small-img-1" alt = "About Us"  />
        <img 
        data-scroll
        data-scroll-speed="-2"
         src={img3} className="small-img-2"  alt = "About Us"  />

    </Right>
    </Section>
  )
}

export default About
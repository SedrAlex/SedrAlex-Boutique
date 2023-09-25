import React, { useRef } from 'react'
import styled from 'styled-components';
import img from '../assets/Images/4.jpeg'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import img1 from '../assets/Images/veste.jpeg';
import img2 from '../assets/Images/mailles.jpeg';
import img3 from '../assets/Images/robe.jpeg';
import img4 from '../assets/Images/jupes.jpeg';
import img5 from '../assets/Images/denim1.jpeg';
import img6 from '../assets/Images/chemises.jpeg';
import img7 from '../assets/Images/salopette.jpeg';
import img8 from '../assets/Images/pantalon.jpeg';
import img9 from '../assets/Images/x.jpeg';
import img10 from '../assets/Images/t-shirt.jpeg';
import img11 from '../assets/Images/gilets.jpeg';
import img12 from '../assets/Images/robe-harper-brique.jpeg';
import img13 from '../assets/Images/e.jpeg';

import { motion } from 'framer-motion';
const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
margin: 0 auto;
overflow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;

position: relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: 'Kaushan Script';
font-weight: 300; 
text-shadow: 1px 1px 1px ${props => props.theme.body};
color: ${props => props.theme.text} ;
position:absolute;
top: 1rem;
left: 5%;
z-index: 11;

@media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
@media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Left = styled.div`
width: 35%;
background-color: ${props => props.theme.body};
background-image:url(${img});
color: ${props => props.theme.text};

min-height: 100vh;
z-index:5;

position:fixed;
left:0;
display:flex;
justify-content: center;
align-items: center;

p{
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto
}

@media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
  @media (max-width: 64em) {
    background-size: contain    ;


}
`;
const Right = styled.div`
position: absolute;
left: 35%;
padding-left: 30%;
min-height: 100vh;
background-color: #A6BAB9;
//background-color: ${(props) => props.theme.grey};
background-color:#A4B4B4;
/* width: 65%; */
display: flex;
justify-content:flex-start;
align-items: center;

h1{
    width: 5rem;
    margin: 0 2rem
}
`
const Item = styled(motion.div)`
width: 20rem;
margin-right: 6rem;

display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
img{
    width: 100%;
    height: auto;
    cursor: pointer;
}
h1{
    display:inline-block;
    width:fit-content;
    font-weight: 500;
    text-align: center;
    cursor:pointer;
}
@media (max-width: 60em) {
    width: 15rem;
  }
`;

const Product = ({img, title = ''}) => {

    return(
         <Item
          initial={{ filter: "grayscale(100%)"  }}
          whileInView={{ filter: "grayscale(0%)" }}
          transition = {{ duration: 5 }}
          viewport={{ once: false, amoint:'all' }}
         >
              <img src={img} alt={title}  />
              <h1>{title}</h1>
         </Item>
    )
}
    const Shop = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const horizontalRef = useRef(null);


    useLayoutEffect(() => {
      let element = ref.current;
      let scrollingElement = horizontalRef.current;

      let pinWrapWidth = scrollingElement.offsetWidth;

      let t1 = gsap.timeline();
      
      setTimeout(() => {
        t1.to(element, {
             scrollTrigger: {
                  trigger: element,
                  start:'top top',
                  end: pinWrapWidth,
                  scroller: '.App ', //locomative element
                  scrub:true,
                  pin:true,
                //   markers:true,
             },
             // we have to increase scrolling height of this section same as the scrolling element width
             height: `${scrollingElement.scrollWidth}px`,
             ease: 'none,'
        })
    //Horizontal Scrolling
        t1.to(scrollingElement, {
            scrollTrigger: {
                 trigger: scrollingElement,
                 start:'top top',
                 end: pinWrapWidth,
                 scroller: '.App ', //locomative element
                 scrub:true,
                //  markers:true,
            },
            // we have to increase scrolling height of this section same as the scrolling element width
            x: -pinWrapWidth,
            ease: 'none,'
       })

ScrollTrigger.refresh();
      }, 1000);
    
      return () => {
        //let's clear instances
        t1.kill();
        ScrollTrigger.kill();
      };
    }, []);

    return (
      <Section ref = {ref} id ="shop"> 
      <Title > Nouvelle Collection  </Title>
            <Left>
             <p>
                La toute nouvelle collection est actuellement en cours de développement en France.
                Nous créons nos produits en utilisant des matériaux de la meilleure qualité, y compris l'utilisation de certains des tissus purs pour fabriquer nos produits.
                Tous les produits sont fabriqués à partir des meilleurs matériaux, du coton le plus fin aux tissus les plus fins.
                <br/>
                <br/>
                Nous avons beaucoup d'options vestimentaires différentes comme des chaussures, des vestes et des robes.
                Non seulement des vêtements, mais nous fournissons également des bijoux uniques.
                C'est super pour nous de porter nos nouveaux vêtements tout autour
            </p>
            </Left>  
            <Right ref={horizontalRef}>
                  <Product img={img1} title="Vestes" />
                  <Product img={img2} title="Mailles" />
                  <Product img={img7} title="Salopettes" />
                  <Product img={img3} title="Robes Classiques" />
                  <Product img={img5} title="Denim" />
                  <Product img={img4} title="Jupes" />
                  <Product img={img6} title="Chemises" />
                  <Product img={img13} title="Robes D'automne"/>
                  <Product img={img8} title="Pantalons" />
                  <Product img={img9} title="Blouses" />
                  <Product img={img10} title="T-shirts" />
                  <Product img={img11} title="Gilets" />
                  <Product img={img12} title="Robes D'été" />


            </Right> 
            
    </Section>
     
        )
}

export default Shop
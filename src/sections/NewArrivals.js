import React from 'react'
import styled from 'styled-components'
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import img from '../assets/Images/llp.jpeg'

import { useRef } from 'react';
import img1 from '../assets/Images/1.1.jpeg';
import img2 from '../assets/Images/1.2.jpeg';
import img3 from '../assets/Images/15.jpeg';
import img4 from '../assets/Images/1.4.jpeg';
import img5 from '../assets/Images/1.5.jpeg';
// import img7 from '../assets/Images/1.7.jpeg';
// import img8 from '../assets/Images/1.8.png';


const Section = styled.section`
min-height: 100vh;
width: 100vw;
margin: 0 auto;
background-image:url(${img});
background-repeat: no-repeat;
background-size:  contain;
background-position:center top;
display: flex;
justify-content: center;
align-items:center;
background-color:rgba(163, 195, 213,0.6);

position:relative;
/* background-color: yellow; */
@media (max-width: 64em) {
    width: 100%;
    background-size:cover ;


}
`
const Overlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 90vh;
box-shadow: 0 0 0 4vw ${props => props.theme.text};
border: 3px solid ${props => props.theme.body};
z-index: 11;

@media (max-width: 70em) {
  width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;
    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;
    height: 80vh;
  }
`;
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: 'Kaushan Script';
font-weight: 300; 
text-shadow: 1px 1px 1px ${props => props.theme.text};
color: #244C62 ;
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

const Text = styled.div`
width: 20%;
font-size:${props => props.theme.fontlg};
font-weight: 300;
position: absolute;
padding: 2rem;
color:#244C62;
top: 0;
right: 0;
z-index: 11;
@media (max-width: 60em) {
    display: none;
  
  }
`;
const Container = styled.div`
position: absolute;
top: 0%;
left: 50%;
transform:translate(-50%, 0);
width: 25vw;
height:auto;
/* width: 65%; */
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

@media (max-width: 64em) {
  width: 30vw;
  }
@media (max-width: 48em) {
  width: 40vw;
  }
@media (max-width: 30em) {
  width: 60vw;
  }
  
`;

const Item = styled.div`

display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin: 5rem 0;
img{
    width: 100%;
    height: auto;
    z-index: 5;
}
h1{
    display:inline-block;
    width:fit-content;
    font-weight: 500;
    text-align: center;
    cursor:pointer;
}
`
const Product = ({img, title = ''}) => {

    return(
         <Item
          
         >
              <img src={img} alt={title}  />
              <h2>{title}</h2>
         </Item>
    )
}
const NewArrivals = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const ScrollingRef = useRef(null);
    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = ScrollingRef.current;
  
        let pinWrapWidth = scrollingElement.offsetWidth;
  
        let t1 = gsap.timeline();
        
        setTimeout(() => {
          t1.to(element, {
               scrollTrigger: {
                    trigger: element,
                    start:'top top',
                    end: 'bottom+=100% top-=100%',
                    scroller: '.App ', //locomative element
                    scrub:true,
                    pin:true,
                    // markers:true,
               },
               // we have to increase scrolling height of this section same as the scrolling element width
               ease: 'none,'
          })
      //Vertical Scrolling
          t1.fromTo(scrollingElement, 
            {
                y:'0',
            },
            
            
            {
                y:'-100%',
              scrollTrigger: {
                   trigger: scrollingElement,
                   start:'top top',
                   end: 'bottom top',
                   scroller: '.App ', //locomative element
                   scrub:true,
                //    markers:true,
              },
              // we have to increase scrolling height of this section same as the scrolling element width
              
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
    <Section ref = {ref} id = "new-arrival">
        <Overlay />
        <Title data-scroll data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        > Nouvelle Arrivee </Title>

        <Container ref={ScrollingRef}>
                  <Product img={img1} title="ROBE MARTHA " />
                  <Product img={img2} title="ROBE ROSA" />
                  <Product img={img3} title="SALOPETTE MAÏTÉ NOIR" />
                  <Product img={img4} title="COSTUME BLANC" />
                  <Product img={img5} title="BLOUSE CLÉLIA FLEUR " />
                  {/* <Product img={img3} title="xyz" />
                  <Product img={img4} title="xyz" /> */}

        </Container> 
        <Text data-scroll data-scroll-speed="-4">
        Une nouvelle collection est disponible pour des vêtements cool 
        dans toutes les tailles.Cette collection est un excellent moyen de trouver un nouveau look pour vous.
       Il offre une variété de styles de vêtements cool pour s'adapter à vos goûts, 
       tandis que vous pouvez également trouver des vêtements cool que vous pouvez porter tous les jours.
<br />
<br />
Des rencontres que nous chérissons tant et qui bien souvent nous inspirent.
Plus qu’une boutique, à l’origine, Il y a quelques années, 
c’est ici que nous donnions vie à nos pièces. Par nostalgie, 
nous avons souhaité que cet endroit en garde le nom ♡ SedrAlex
        </Text>
    </Section>
  )
}

export default NewArrivals
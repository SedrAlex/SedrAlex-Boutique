import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
min-height: 100vh;
width: 80vw;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
position: relative;
@media (max-width: 60em) {
    width: 90vw;
  }
`
const Container = styled.div`
min-height: 100vh;
background-color:#244C62;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media (max-width: 64em) {
    justify-content: center;
  }
`
const BannerComponent = styled.h1`
font-size: ${props => props.theme.fontxxxxl};
font-family: 'Kaushan Script';
color: #244C62;
white-space: nowrap;
text-transform: uppercase;
line-height: 1;
@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
  }
@media (max-width: 70) {
margin: 1rem 0;
  }
@media (max-width: 60em) {
    margin: 0.5rem 0;
  }
@media (max-width: 40em) {
    justify-content: center;
  }

span{
    display: block;
    background-color:#A3C3D5;
    padding: 1rem 2rem;

}
`
const Banner = () => {
  return (
     <Section>
         <Container id = "up">
              <BannerComponent>
                   <span data-scroll data-scroll-direction="horizontal"
                   data-scroll-speed="8"
                   data-scroll-target="#up">
                  Certaines choses démodées </span>
              </BannerComponent>
              <BannerComponent>
              <span data-scroll data-scroll-direction="horizontal"
                   data-scroll-speed="-6"
                   data-scroll-target="#up"> 
                  comme l'air frais et</span>
              </BannerComponent>
              <BannerComponent>
              <span data-scroll data-scroll-direction="horizontal"
                   data-scroll-speed="6"
                   data-scroll-target="#up">le soleil sont difficiles à battre.
                   </span>
              </BannerComponent>
              <BannerComponent>
                  <span data-scroll data-scroll-direction="horizontal"
                   data-scroll-speed="-4"
                   data-scroll-target="#up"> La mode passe, 
                   </span>
              </BannerComponent>
              <BannerComponent>
                  <span data-scroll data-scroll-direction="horizontal"
                   data-scroll-speed="6"
                   data-scroll-target="#up"> seul le style reste le même.
                   </span>
              </BannerComponent>
         </Container>
     </Section>
  )
}

export default Banner
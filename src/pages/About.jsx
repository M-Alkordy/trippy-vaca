import React from 'react'
import Header from './../components/Header/Header'
import AboutHero from './../assets/img/night.jpg'
const About = () => {
  return (
    <>
      <Header 
        title="About" 
        img={AboutHero}
        ButtonStyle = "none"
      />
    </>
  )
}

export default About
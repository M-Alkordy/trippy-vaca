import React from 'react'
import HomeHero from '../assets/img/12.jpg'
import Header from '../components/Header/Header'
import PopularDestinations from '../components/PopularDestinations/PopularDestinations'
import FirstImage from '../assets/img/5.jpg'
import SecImage from '../assets/img/8.jpg'
import ThirdImage from '../assets/img/9.jpg'
import fourthImage from '../assets/img/10.jpg'
import './HomeStyle.css'

const Home = () => {
  const title = "Mt. Daguldul, Batangas";
  const Sectitle = "Taal Volcano, Batangas";

  const info = "One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!";

  const Secinfo = "One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!";

  return (
    <div className='home'>
    <Header 
    title="Your Journey Your Story" 
    desc="Choose Your Favourite Destination." 
    img={HomeHero}
    btn="travel now" />
    <div className="popular">
      <h1>Popular Destinations</h1>
      <p>Tours dive you the opportunity to see a lot, within a time frame.</p>
      <PopularDestinations 
      title={title}
      info={info}
      FirstImage ={FirstImage}
      SecImage ={SecImage}
      Class ="container"
       />

      <PopularDestinations 
      title={Sectitle}
      info={Secinfo}
      FirstImage ={ThirdImage}
      SecImage ={fourthImage}
      Class ="container reverse"
       />
    </div>
    <p>hello from home</p>
    </div>
  )
}

export default Home
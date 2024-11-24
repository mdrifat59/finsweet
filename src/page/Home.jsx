import React from 'react'
import HomeBanner from '../component/Banner/HomeBanner'
import Relevant from '../component/Relevant'
import Compassion from '../component/Compassion'
import Benefits from '../component/Benefits'
import JoinUs from '../component/JoinUs'
import AroundUs from '../component/AroundUs'
import Blog from '../component/Blog'

const Home = () => {
  return (
     <>
        <HomeBanner/>
        <Relevant/>
        <Compassion/>
        <Benefits/>
        <JoinUs/>
        <AroundUs/>
        <Blog/>
     </>
  )
}

export default Home
import React from 'react'
import HomeBanner from '../component/Banner/HomeBanner'
import Relevant from '../component/Relevant'
import Compassion from '../component/Compassion'
import Benefits from '../component/Benefits'

const Home = () => {
  return (
     <>
        <HomeBanner/>
        <Relevant/>
        <Compassion/>
        <Benefits/>
     </>
  )
}

export default Home
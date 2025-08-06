import EffortlessHosting from '@/pages/EffortlessHosting'
import EventSpacePage from '@/pages/EventSpacePage'
import FeaturedSection from '@/pages/FeaturedSection'
import OurTeamSection from '@/pages/OurTeamSection'
import React from 'react'

const About = () => {
  return (
    <div>
        <EventSpacePage />  
        <EffortlessHosting />
        <OurTeamSection/>
        <FeaturedSection />
    </div>
  )
}

export default About
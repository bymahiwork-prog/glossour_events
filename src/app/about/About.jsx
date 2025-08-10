import EffortlessHosting from '@/pages/about/EffortlessHosting'
import EventSpacePage from '@/pages/about/EventSpacePage'
import FeaturedSection from '@/pages/about/FeaturedSection'
import OurTeamSection from '@/pages/about/OurTeamSection'
import React from 'react'

const About = () => {
  return (
    <div>
        <EventSpacePage />  
        <EffortlessHosting />
        <OurTeamSection />
        <FeaturedSection />
    </div>
  )
}

export default About
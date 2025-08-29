import EffortlessHosting from "@/utils/about/EffortlessHosting";
import EventSpacePage from "@/utils/about/EventSpacePage";
import FeaturedSection from "@/utils/about/FeaturedSection";
import OurTeamSection from "@/utils/about/OurTeamSection";
import React from "react";

const About = () => {
  return (
    <div>
      <EventSpacePage />
      <EffortlessHosting />
      <OurTeamSection />
      <FeaturedSection />
    </div>
  );
};

export default About;

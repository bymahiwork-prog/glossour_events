import EffortlessHosting from "@/utils/about/EffortlessHosting";
import EventSpacePage from "@/utils/about/EventSpacePage";
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

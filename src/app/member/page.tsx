import React from "react";
import Header from "../about/components/header";
import TeamHeader from "./components/team-header";
import HeroSection from "./components/hero-sec";
import MeetTeam from "./components/meet-team";
import Trial from "../pricing/components/trial";

const Member = () => {
  return (
    <div>
      <Header />
      <TeamHeader />
      <HeroSection />
      <MeetTeam />
      <Trial />
    </div>
  );
};

export default Member;

import TeamCardProp from "@/app/about/components/team-card-prop";
import React from "react";

const TeamImage = [
  "/Images/team6.jpg",
  "/Images/team7.jpg",
  "/Images/team8.jpg",
  "/Images/team9.jpg",
  "/Images/team10.jpg",
  "/Images/team11.jpg",
  "/Images/team12.jpg",
  "/Images/team13.jpg",
  "/Images/team14.jpg",
];

const MeetTeam = () => {
  return (
    <div className="lg:w-[1050px] lg:h-[1559px]  mx-auto flex flex-col items-center gap-y-16 p-3">
      <h2 className="text-[40px] text-darkBackground font-bold text-center my-20">
        Meet Our Team
      </h2>
      <div className="w-full lg:w-[1034px] lg:h-[383px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TeamImage.map((img, index) => {
          return (
            <div key={index} className="w-full lg:w-[316px] h-full">
              <TeamCardProp img={img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetTeam;

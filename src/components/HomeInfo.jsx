import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

// InfoBox component
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box  ">
    <p className="font-medium sm:text-base text-sm text-center  ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-3 h-3 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-lg text-sm leading-snug text-center neo-brutalism-blue py-4 px-4 text-white mx-4">
      Hi, I am <span className="font-semibold">Emine</span> 👋
      <br />A Frontend Developer From Turkey.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/content"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ CurrentStage }) => {
  return (
    <div className="mt-10">
      {" "}
      {/* Daha küçük margin-top eklendi */}
      {renderContent[CurrentStage] || null}
    </div>
  );
};

export default HomeInfo;

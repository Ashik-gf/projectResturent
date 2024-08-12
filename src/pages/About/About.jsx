import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import AboutBanner from "../../Components/Banner/AboutBanner/AboutBanner";
import FrashProduects from "../../Components/Products/FrashProduects";
import Team from "../../Components/Team/Team";
import Testymonial from "../../Components/Testemonial/Testymonial";
import Gallary from "../../Components/Gallary/Gallary";
import Reservation from "../../Components/Reservation/Reservation";

const About = () => {
  return (
    <section className="  items-center max-w-7xl mx-auto  h-full bg-white">
      {/* <headerTitle></headerTitle> */}
      <MenuTitle title={"About Us"} />

      <AboutBanner />
      <FrashProduects />
      <Team />
      <Testymonial />
      <Gallary />
      <Reservation />
    </section>
  );
};

export default About;

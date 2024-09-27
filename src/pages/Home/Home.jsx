import React, { useRef, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Story from "../../Components/Story/Story";
import Offer from "../../Components/Offer/Offer";
import ClientSay from "../../Components/ClientSay/ClientSay";
import SpicalOffer from "../../Components/SpicalOffer/SpicalOffer";
import GuestOffer from "../../Components/GuestOffer/GuestOffer";
import Reservation from "../../Components/Reservation/Reservation";
import Blogs from "../../Components/Blog/Blog";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {


  return (
    <div className="max-w-7xl mx-auto">
      <Banner  className="banner" />
      <Story  />
      <Offer  />
      <ClientSay  />
      <SpicalOffer  />
      <GuestOffer  />
      <Blogs  />
      <Reservation  />
    </div>
  );
};

export default Home;
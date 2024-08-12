import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Story from "../../Components/Story/Story";
import Offer from "../../Components/Offer/Offer";
import ClientSay from "../../Components/ClientSay/ClientSay";
import SpicalOffer from "../../Components/SpicalOffer/SpicalOffer";
import GuestOffer from "../../Components/GuestOffer/GuestOffer";
import Blog from "../../Components/Blog/Blog";
import Reservation from "../../Components/Reservation/Reservation";

const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto ">
      <Banner />
      <Story />
      <Offer />
      <ClientSay />
      <SpicalOffer />
      <GuestOffer />
      <Blog />
      <Reservation />
    </div>
  );
};

export default Home;

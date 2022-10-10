import React from "react";
import BottleCard from "../../components/BottleCard/BottleCard";
import FAQs from "../../components/FAQs/FAQs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BannerContent from "./BannerContent/BannerContent";
import BannerSection from "./BannerSection/BannerSection";
import "./dashboard.css";
import EventCollection from "./EventCollection/EventCollection";
import Roadmap from "./Roadmap/Roadmap";
import UserCollection from "./UserCollection/UserCollection";
import ConnectWallet from "./WalletConnectSection/ConnectWallet";

// Replace with your component
// import DummyNFT from "../../components/DummyNFT/DummyNFT";

const Dashboard = () => {
  return (
    <div className="Dashboard_Body">
      <Header />
      <div className="container">
        <BannerSection />
        <BannerContent />
        <UserCollection />
        <ConnectWallet />
        <Roadmap />
        <BottleCard />
        <EventCollection />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

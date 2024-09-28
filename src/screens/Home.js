import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <div className="bg-warning">
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
        <Card/> 
        <Card/> 
        <Card/> 
        <Card/> 
        <Card/> 

      <div>
        <Footer />
      </div>
    </div>
  );
}

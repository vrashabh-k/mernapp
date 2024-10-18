import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-warning">
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        {
          foodCat && foodCat.length > 0 ? (
            foodCat.map((data, index) => (
              <div key={index}>{data.CategoryName}</div>
            ))
          ) : (
            <div>No categories available</div>
          )
        }

        {/* Render food items */}
        {
          foodItem && foodItem.length > 0 ? (
            foodItem.map((item, index) => (
              <Card key={index} item={item} />
            ))
          ) : (
            <div>No food items available</div>
          )
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (<div className="page-container d-flex flex-column" style={{ minHeight: '100vh' }}>
      <header>
        <Navbar />
      </header>
    <main className="flex-grow-1" style={{ backgroundColor: '#c3cddb' }}>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex:"10"}}>
            <div className="d-flex justify-content-center" role="search">
        <input className="form-control me-2" type="search" placeholder="Search for dish" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </div>

            </div>
          <div className="carousel-item active">
            <img
              src="/images/pizza1.jpg"
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/biriyani1.jpg"
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/pizza2.jpg"
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/friedrice1.jpg"
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLowerCase()))) 
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card foodItem={filterItems}
                          options={filterItems.options[0]}
                          
                          />
                        </div>
                      );
                    })
                ) : (
                  <div> No such Data Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>********</div>
        )}
      </div>
      
    </main>

    <Footer />
      
      
    </div>
  );
}

import { React, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { json, Link } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }))
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },    
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const temp = await response.json();
    console.log(temp);

    if (!temp.success) {
      alert("Enter Valid credentials");
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <>
      <div><Navbar/></div>
        <div className="container mt-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={onChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onChange}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onChange}
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text    "
                className="form-control"
                name="geolocation"
                value={credentials.geolocation}
                onChange={onChange}
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <Link to="/login" className="m-3 btn btn-danger">
              Already a user
            </Link>
          </form>
        </div>
        <div><Footer/></div>
      </>
    </div>
  );
}

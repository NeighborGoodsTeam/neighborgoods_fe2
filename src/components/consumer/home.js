import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <div className="carousel-slide">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/6231974/pexels-photo-6231974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="First slide"
            />

            {/* <Carousel.Caption>
              <h3>Shop Small</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>  */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3811832/pexels-photo-3811832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5760837/pexels-photo-5760837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <h1>Shop Small</h1>
      <p>Find local stores that are right for you</p>
      <Link to={`/search`}>
        <Button variant="primary">Get Started</Button>
      </Link>
      <div></div>
      <div>
        <h3>How it works</h3>
        <>
          <img src="" alt="" />
          <p>
            Start by entering your product name, brand, or keyword to search our
            database for your item.
          </p>
        </>
        <>
          <img src="" alt="" />
          <p>
            Next, allow location service and refine your search results by
            distance. Skip this step to find all stores that can meet your
            needs.
          </p>
        </>
        <>
          <img src="" alt="" />
          <p>
            Inclusivity is important to us. User our filter tags to find stores
            that represent what's important to you.
          </p>
        </>
      </div>
    </>
  );
}

export default Home;

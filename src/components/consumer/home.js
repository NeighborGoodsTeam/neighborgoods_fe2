import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../media/Fresh Folk Working from Home.png";
import image2 from "../../media/Fresh Folk Coffee Chat.png";
import image3 from "../../media/Fresh Folk Strolling.png";
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
      <div className="home_body">
        <div className="carousel_overlay">
          <h1>Go Local</h1>
          <p>Find small businesses in your area that fit your needs</p>
          <Link to={`/search`}>
            <Button variant="primary">Get Started</Button>
          </Link>
        </div>
        <h2>How it works</h2>
        <div className="home_main">
          <div className="home_section">
            <img src={image1} alt="" />
            <div className="home_wording">
              <h3>Find the items you've been searching for</h3>
              <p>
                NeighborGoods seeks to connect you with stores in your community
                that stock the items you would normally get from large
                corporations. Shop small, not big.
              </p>
            </div>
          </div>

          <div className="home_section">
            <div className="home_wording">
              <h3>Find neighborhood gems</h3>
              <p>
                Sometimes you can miss the best small businesses that are right
                around the corner. Use our refined search to start supporting
                the companies that deserve it.
              </p>
            </div>
            <img src={image2} alt="" />
          </div>

          <div className="home_section">
            <img src={image3} alt="" />
            <div className="home_wording">
              <h3>Prioritize your values</h3>
              <p>
                Inclusivity is important to us. Use our filter tags to find
                stores that represent what’s important to you or sign up to
                share your small shop with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

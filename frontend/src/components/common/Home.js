import React from 'react'
import { homeCarousel, video } from '../../styles/assets/homeCarousel/homeCarousel-data'
import Slider from 'react-slick'


import Boxes from '../pages/Boxes'

class Home extends React.Component {
  state = {
    showModal: false
  }
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000
    }
    return (
      <div className="home">
        <section className="home-section hero has-text-centered">
          <div className="carousel-wrapper">
            <Slider {...settings}>
              {
                homeCarousel.map(image => <div className="home-slideshow" key={image.name}>
                  <img src={image.value} alt="Sporting kids having fun" />
                </div>)
              }
            </Slider>
          </div>
        </section>
        <section className="welcome section">
          <div className="container">
            <h1 className="animate__animated animate__heartBeat title has-text-centered">WELCOME TO SPORTING KIDS</h1>
            <h2 className="home-subtitle subtitle has-text-centered">
              Sporting Kids is an independent sports coaching company that has been working with children and schools across London and sorrounding counties
            </h2>
          </div>
        </section>
        <section className="section">
          <div id="container" className="container">
            <div id="monitor">
              <div id="monitorscreen">
                <div className="video">
                  <video src={video} autoPlay controls muted />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="offerings">
              <Boxes
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Home
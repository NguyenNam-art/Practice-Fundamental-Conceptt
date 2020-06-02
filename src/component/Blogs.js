import React, { Component } from "react";
import "./cpnStyle/Blogs.scss";
import Blog from './Blog'
import firstslide from "./../img/balenciaga-triple-s-nss-700x700.jpg";
import secondslide from "./../img/91458378_2791447224308681_4600043427239821312_n-1-300x300.jpg";
class Blogs extends Component {
  render() {
    return (
      <div>
        <h2 className="title text-center text-md-left">TIN TỨC</h2>
        <div className="Blogs row">
          <div
            id="Blog"
            className="carosel carousel slide col-md-7 col-xl-7 col-lg-7"
            data-ride="carousel"
          >
            <ul className="carousel-indicators">
              <li data-target="#Blog" data-slide-to="0" className="active"></li>
              <li data-target="#Blog" data-slide-to="1"></li>
              <li data-target="#Blog" data-slide-to="2"></li>
              <li data-target="#Blog" data-slide-to="3"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="!#">
                  <img src={firstslide} alt="Los Angeles" />
                </a>

                <div className="carousel-caption"></div>
              </div>
              <div className="carousel-item">
                <a href="!#">
                  <img src={secondslide} alt="New York" />
                </a>
                <div className="carousel-caption"></div>
              </div>
              <div className="carousel-item">
                <a href="!#">
                  <img src={firstslide} alt="Los Angeles" />
                </a>
                <div className="carousel-caption"></div>
              </div>
              <div className="carousel-item">
                <a href="!#">
                  <a>
                    <img src={secondslide} alt="New York" />
                  </a>
                </a>
                <div className="carousel-caption"></div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#Blog" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#Blog" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
          <div className="col-md-5 col-xl-5 col-lg-5">
              <h2>BÀI VIẾT MỚI NHẤT</h2>
              <Blog></Blog>
              <Blog></Blog>
              <Blog></Blog>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}
export default Blogs;

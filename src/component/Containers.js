import React, { Component } from "react";
import "./cpnStyle/Container.scss";
import firstslide from "./../img/firstSlide.jpg";
import secondslide from "./../img/secondslide.jpg";


// import Product from "./Product";
import Blogs from "./Blogs";
// import Slider from "react-slick";

class Containers extends Component {
  
  render() {
    // var {products} = this.props;
    return (
      <div className="App">
        <div id="demo" className="carosel carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
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
                <img src={secondslide} alt="New York" />
              </a>
              <div className="carousel-caption"></div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
        <hr></hr>
        <div className="container-fluid">
          <div className="newShoes">
            <div className="headnew col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12">
              <div className="home_cate_box_title clearfix">
                <h2 className="title text-center text-md-left">GIÀY NEW</h2>
              </div>
              <ul className="box-tabs clearfix">
                <li>
                  <a href="!#">ASICS</a>
                </li>
                <li>
                  <a href="!#">NEW BALANCE</a>
                </li>
                <li>
                  <a href="!#">PHỤ KIỆN GIÀY</a>
                </li>
                <li>
                  <a href="!#">RICK OWEN - DRKSDW</a>
                </li>
                <li>
                  <a href="!#">NIKE</a>
                </li>
                <li>
                  <a href="!#">ADIDAS</a>
                </li>
                <li>
                  <a href="!#">PUMA</a>
                </li>
                <li>
                  <a href="!#">CONVERSE</a>
                </li>
                <li>
                  <a href="!#">VANS</a>
                </li>
                <li>
                  <a href="!#">REEBOK</a>
                </li>
                <li>
                  <a href="!#">TIMBERLAND</a>
                </li>
                <li>
                  <a href="!#">FILA</a>
                </li>
                <li>
                  <a href="!#">SKETCHERS</a>
                </li>
                <li>
                  <a href="!#">KHÁC</a>
                </li>
              </ul>
            </div>

            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container-fluid">
        <Blogs></Blogs>
        </div>
      </div>
    );
  }
  
}

export default Containers;

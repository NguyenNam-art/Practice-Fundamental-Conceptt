import React, { Component } from "react";
import "./cpnStyle/Blog.scss";
import firstslide from "./../img/balenciaga-triple-s-nss-700x700.jpg";
import secondslide from "./../img/91458378_2791447224308681_4600043427239821312_n-1-300x300.jpg";
class Blog extends Component {
  render() {
    return (
      <div>
          <div className="blog">
              <img src={secondslide}></img>
              <a href="!#">NIKE DUNK / SB DUNK 2nd</a>
          </div>
      </div>
    );
  }
}
export default Blog;

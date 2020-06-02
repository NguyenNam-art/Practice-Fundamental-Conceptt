import React from "react";
import "./app.scss";
import Header from './component/Header'

// import Slider from "react-slick";
import ProductContainer from "./Containers/ProductContainer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductContainer/>
    </div>
  );
}
export default App;

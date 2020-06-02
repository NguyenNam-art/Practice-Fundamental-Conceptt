import React, { Component } from "react";
import Containers from '../component/Containers'
import {connect} from 'react-redux'
import Product from './../component/Product'
// import Slider from "react-slick";
class ProductContainer extends Component {
  render() {
    var {products} = this.props;
    return (
      <Containers>
        {this.showProducts(products)}
      </Containers>
    );
  }
  showProducts(products){
    var result = null;
    if(products.length>0){
      result = products.map((product,index) =>{
        return <Product key={index} product={product}></Product>
      }) 
    }
    return result;
  }
}

const mapStateToProps = state =>{
  return{
    products : state.products
  }
}

export default connect(mapStateToProps,null) (ProductContainer);

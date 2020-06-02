import React, { Component } from "react";
import {connect} from 'react-redux'
import Product from './../component/Product'
class CartContainer extends Component {
  render() {

    var {cart} = this.props;
    console.log(cart);
    return (  
      // <Product>
      //     {this.showCartItem(cart)}
      // </Product>
      <div></div>   
    );
  }
  // showCartItem = (cart) =>{
  //   if(cart.length>0){
  //     result = cart.map((item, index) =>)
  //   }
  // }
}


const mapStateToProps = state =>{
  return {
    cart : state.cart
  }
}
export default connect(mapStateToProps,null) (CartContainer);

import React, { Component } from "react";
import "./cpnStyle/Produc.scss";
import {Form,Input, Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CartContainer from './../Containers/CartContainer'
// import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class Product extends Component {
  constructor(props) {
      super(props);
      this.state = {
        modalisopen : false,
        amount : 1
      };
    }
    showTotalAmount = (product) => {
      var total = 1;
      // if (product.length > 0) {
      //     for (var i = 0; i < product.length; i++) {
      //         total += product[i].product.price * product[i].quantity;
      //     }
      // }
      return total;
  }
  onHandleChange(event) {
    console.log(event.target.value)

  }
  handleSubmit(event) {
    event.preventDefault();
    
  }
  toggleModal = (product) => {
      this.setState({
        modalisopen : !this.state.modalisopen
      });
  }
  render() {
    var {product} = this.props;
    return (
      <div className="product col-lg-3 col-sm-3 col-xl-3 col-md-3">
        <div className=" ">
          <div className="">
            <img src={product.image} className="img-fluid" alt="" />
            <a>
              <div className=""></div>
            </a>
          </div>
          <div className="">
            <p className="">
              <a>{product.name}</a>
            </p>
            <p>{product.conds ? 'New' : 'Used'}</p>
            <p>{product.price}</p>
            <div className="">
              <Button color="danger" onClick={this.toggleModal}>Đặt Hàng Ngay <FontAwesomeIcon className="icon" icon={faShoppingCart} /></Button>
              <Modal isOpen={this.state.modalisopen}>
                <ModalHeader toggle={this.modalisopen}>{product.name}</ModalHeader>
                <ModalBody>
                  <img className="modalImage" src={product.image}></img>
                  <p>Price : {product.price*this.state.amount} $</p>
                  <Form onSubmit={this.handleSubmit}>
                    <Input onChange={this.onHandleChange} type="number" name="amount"   placeholder="Số lượng"></Input>
                    {/* <Button  type="submit" value="submit">Submit</Button> */}
                  </Form>
                  {/* <p>{() => this.showTotalamount(product)}</p> */}
                </ModalBody>
                <ModalFooter>
                  <Button>Sign up</Button>
                  <Button onClick={() => this.toggleModal(product)}>Cancel</Button>
                  <CartContainer></CartContainer>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;

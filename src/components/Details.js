import React, { Component } from "react";
import {ProductConsumer} from '../context';
import { Link } from "react-router-dom";
import {ButtonContainer} from './Button'
class Details extends Component {
  render() {
    return (
        <ProductConsumer>
          {(value)=>{
            const {id, company, img, info, price, title, inCart} = value.productDetail;
            return(
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} alt="product" className="img-fluid"/>
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Model: {title} </h2>
                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Made by: <span className="text-uppercase">{company}</span>
                    </h5>
                    <h4 className="text-blue">
                      price: <span>$</span>{price}
                    </h4>
                    <p className="text-capitalize font-wight-bold mt-3 mb-0">some info about the product:</p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to product</ButtonContainer>
                      </Link>
                      <ButtonContainer cart disabled={ inCart ? true : false } onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                      }}>
                        {inCart ? 'in cart' : 'add to cart'}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            )
          }}
        </ProductConsumer>
    );
  }
}

export default Details;

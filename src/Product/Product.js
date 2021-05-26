import React, { useState } from 'react'
import './Product.css'
import data from '../data.json'

export default function Product({id, image, title, price, rating}) {

const [product, setProduct] = useState(data.products);

const [cartItems, setCartItems] = useState([])

const addToBasket = () => {
   let alreadyInCart = false;
   cartItems.forEach(item => {
    if(item._id === product._id){
      item.count++;
      alreadyInCart = true;
    }
  })
  if(!alreadyInCart){
    cartItems.push({...product, count : 1})
  }
  setCartItems({cartItems});
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

    return (
        <div>
          <div className="product">
            
            <img src={image} alt="" />

            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small> ‎¥‎ </small>
                    <strong>{price}</strong> 
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
                
            <button onClick = {addToBasket}>Add to basket</button>
            
        </div>
        </div>
    )
}

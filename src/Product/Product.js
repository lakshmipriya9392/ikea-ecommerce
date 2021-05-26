import React from 'react'
import './Product.css'
// import data from '../data.json'

export default function Product({id, image, title, price, rating}) {


// const addToBasket = () => {
    
// }

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
                
            <button>Add to basket</button>
            
        </div>
        </div>
    )
}

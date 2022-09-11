import React, {useState} from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id,title,image,price,rating}) {

    const [{basket}, dispatch] = useStateValue();



    console.log("this is the basket: ", basket)

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },

        })

    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">

                    <strong>${price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                        <p>⭐</p>
                        ))}
                </div>
                <button>Remove from Basket</button>

            </div>
            <img className="lean" src={image}
                 alt="eee"
            />
            <button onClick={addToBasket}>Add to Basket</button>





        </div>
    );

}

export default Product;
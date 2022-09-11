import React, {useState} from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { auth } from './Firebase';

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout_left">
                {/*<img className="checkout_ad" src="https://m.media-amazon.com/images/I/71UX-VdyU9L._SX3000_.jpg"*/}
                {/*     alt=""/>*/}


                <div >
                    <h3>hello {auth.currentUser?.email}</h3>
                    <h2 className="checkout_title"> Your shopping Basket </h2>
                    
                    {basket.map(item=>(
                        <div className='boss'>
                        <CheckoutProduct
                            id={item.id}
                            title= {item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        </div>
                    ))}
                    
                </div>

            </div>
            <div className="checkout_right">
                <Subtotal/>

            </div>

        </div>

    );
}

export default Checkout;
import React, {useState} from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();


    const basketPrice=(prevState,nextPrice)=>{

        return(
            [...prevState+nextPrice]
        )

    }


    return (
        <div className="checkout">
            <div className="checkout_left">
                {/*<img className="checkout_ad" src="https://m.media-amazon.com/images/I/71UX-VdyU9L._SX3000_.jpg"*/}
                {/*     alt=""/>*/}


                <div>
                    <h2 className="checkout_title"> Your shopping Basket </h2>

                </div>
                <div>

                    {basket.map((cokolwiek) => {
                        // setPrice(cokolwiek.price)

                        return (
                            <div className="basketList">
                                <h1>{cokolwiek.id}</h1>
                                <h1>{cokolwiek.price}</h1>
                                <img src={cokolwiek.image}/>

                            </div>)
                    })}

                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>

            </div>

        </div>

    );
}

export default Checkout;
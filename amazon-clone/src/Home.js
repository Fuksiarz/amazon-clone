import React from 'react';
import './Home.css';
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <div className='home__container'>
                <img className="home_image"
                    src="https://m.media-amazon.com/images/I/6181GIcGcvL._SX3000_.jpg"
                    alt=""
                />

                <div className="home__row">

                    <Product id="4903850"
                             title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                             price={29.99}
                             rating={4}
                             image="https://static01.helion.com.pl/global/okladki/326x466/meleav.jpg"
                    />
                    <Product id="23445930"
                             title="Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric"
                             price={98.99}
                             rating={5}
                             image="https://www.twinschip.com/image/cache/catalog/Products%20Twins%20Chip%20Store%202020/%20Echo%20Dot%203rd%20Gen%20Smart%20speaker%20with%20Alexa/Alexa%20Echo%20Dot%203rd%20Gen%20Smart%20speaker%20-%20Twins%20Chip%201-550x550w.jpg"
                    />
                    <Product id="3254354345"
                             title="Apple iPad Pro 12, 2021 Wi-Fi 256GB"

                             price={594.99}
                             rating={5}
                             image="https://f01.esfr.pl/foto/8/84094381817/3f2d678e383fe5b03a0fb3ea96b65728/apple-tablet-ipad-pro-12-9-256g-sp-gray-wifi,84094381817_8.jpg"
                    />






                </div>
                <div className="home__row">

                    <Product id="12345"
                             title="Certified Refurbished Fire TV Cube, hands-free with Alexa built in, 4K Ultra HD, streaming media player, released 2019"

                             price={294.99}
                             rating={4}
                             image="https://m.media-amazon.com/images/I/41e9eAuFMQL._AC_SL1000_.jpg"
                    />
                    <Product id="123456"
                             title="Certified Refurbished Kindle - Now with a Built-in Front Light - Black - Ad-Supported"

                             price={99.99}
                             rating={4}
                             image="https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg"
                    />


                </div>


            </div>

        </div>
    );
}

export default Home;
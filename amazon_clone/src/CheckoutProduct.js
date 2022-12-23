import React from 'react'
import "./CheckoutProduct.css";

function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg" alt="" className="checkoutProduct_image" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal
                </p>
                <p className="checkoutProduct_price">$14.99</p>
                <div className="checkoutProduct_rating">
                    
                </div>
                <button>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
import React from 'react'
import "./Product.css"

function Product() {
  return (
        <div className="product">
            <div className="product_info">
                <p>Ring Video Doorbell - 1080p HD video, improved motion detection, easy installation – Satin Nickel</p>
                <p className='product_price'>$59.99</p>
                <div className="product_rating">⭐️⭐️⭐️⭐️⭐️</div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71vtXgJBagL._AC_UL450_SR450,320_.jpg" alt="product-image" />

            <button>Add to Cart</button>
        </div>
  )
}

export default Product
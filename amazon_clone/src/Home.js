import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home_image" />

                    <div className="home_row">
                        <Product
                            id="0001"
                            title="Ring Video Doorbell - 1080p HD video, improved motion detection, easy installation – Satin Nickel"
                            price={59.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71vtXgJBagL._AC_UL450_SR450,320_.jpg"
                        />
                        <Product
                            id="0002"
                            title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
                            price={14.99}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
                        />
                    </div>

                    <div className="home_row">
                        <Product
                            id="0003"
                            title="Carhartt Men's Knit Cuffed Beanie"
                            price={19.99}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/81MSnS4nUnL._AC_UL450_SR450,320_.jpg"
                        />
                        <Product
                            id="0004"
                            title="2021 Apple Ipad Mini (Wi-Fi, 64GB) - Space Gray"
                            price={469.00}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71ey-9D8yDL._AC_UY218_.jpg"
                        />
                        <Product
                            id="0005"
                            title="Taco Cat Goat Cheese Pizza"
                            price={9.84}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71ilGhSXWwL._AC_UL450_SR450,320_.jpg"
                        />
                    </div>

                    <div className="home_row">
                        <Product
                            id="0006"
                            title='Samsung 49" Odyssey G9 Gaming Monitor'
                            price={949.03}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY218_.jpg"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
import React from 'react';
import "./Home.css";
import headerImage from "./assets/header1.jpg";
import Product from './product/Product';
import adImage from "./assets/ads/Unboxed_1209836__Category_1500x300.jpg";
import { useState } from 'react';


const Home = () => {
    const [books,setBooks] = useState({})
        // db.collection("categories").doc("products").collection("book").get().then((snapshots)=>{
        //     snapshots.docs?.map((book)=>{
        //         console.log(book.data());
        //     })
        // })
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" alt="home-image" className="home_image" />

            <div className="home_row">
                <Product
                id={12345}
                title="Ikigai: The Japanese secret to a long and happy life"
                image="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_QL65_.jpg"
                price = {315}
                rating = {4}
                />
                <Product
                id={12346}
                title="MINDFUL ZEN HABITS: From Suffering to Happiness In 30 Days"
                image="https://m.media-amazon.com/images/I/51cihp7YeQS._AC_UY327_QL65_.jpg"
                price = {155}
                rating = {5}
                />
                <Product
                id={12349}
                title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now"
                image= "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY327_QL65_.jpg"
                price = {399}
                rating = {4}
                />
            </div>
            <div className="adImage">
            <img src={adImage} />

            </div>
            <div className="home_row">
                <Product
                id={1234595}
                title ="New Apple iPhone 11 (64GB) - Purple"
                image="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY327_QL65_.jpg"
                price = {51999}
                rating = {5}
                />
                <Product
                id={1234512}
                title="Samsung Galaxy M12 (Blue,6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime"
                image="https://m.media-amazon.com/images/I/71yYaNztZ0L._AC_UY327_QL65_.jpg"
                price = {49900}
                rating = {5}
                />
                <Product
                id={1234554}
                title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
                image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_QL65_.jpg"
                price = {14999}
                rating = {4}
                />

            </div>
            
            <div className="home_row">
                <Product
                id={12345678}
                title="Lenovo Tab M10 FHD Plus Tablet (10.3-inch, 2GB, 32GB, Wi-Fi + LTE, Volte Calling), Platinum Grey'"
                image="https://m.media-amazon.com/images/I/81PkgYunJ-L._AC_UY327_QL65_.jpg"
                price = {15000}
                rating = {5}
                />
            </div>

            </div>

            
        </div>
    )
}

export default Home

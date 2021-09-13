import React from 'react';
import "./Checkout.css";
import adImage from "../assets/ads/SBI-PC.jpg";
import SubTotal from './SubTotal';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from '../Store/StateProvider';
import { useHistory } from 'react-router-dom';

function CheckOut() {
    const [{basket,user}] = useStateValue();
    const history = useHistory();

    if(!user){
        history.push("/login")
    }
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={adImage} alt="" className="checkout_ad" />

            <div className="checkout_title">
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {
                    basket?.map(item=>(
                        <CheckOutProduct
                        key ={item.id}
                        id = {item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton={false}
                        />
                    ))
                }
            </div>
            </div>
            <div className="checkout_right">
               <SubTotal/>
            </div>
            
        </div>
    )
}

export default CheckOut;

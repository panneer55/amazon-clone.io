import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import "./CheckOutProduct.css"; 
import { useStateValue } from '../Store/StateProvider';

function CheckOutProduct({id,image,price,rating,title,hideButton}) {
    const[{basket},dispatch] = useStateValue();
    const removeFromBasket =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }


    return (
        <div className="checkoutProduct">
            <img src={image} alt="image" className="checkoutProduct_image" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className = "checkoutProduct_price">
                <strong>{new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        }).format(price)}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map(()=><StarIcon className="star_icon"/>)
                    }
            </div>
            {
                !hideButton && <button onClick={removeFromBasket}>Remove from Cart</button>
            }
            </div>
            
        </div>
    )
}

export default CheckOutProduct;
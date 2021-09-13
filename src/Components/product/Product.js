import React from 'react'
import "./product.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../Store/StateProvider';


function Product({title,id,image,price,rating}) {
    const[{basket},dispatch] = useStateValue();
    const addToBasket =()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price : price,
                rating: rating
            }  
        })
    }

    return (
        <div key={id} className="Product">
            <div className="product_info">
                <p>{title}</p>
                <p className = "product_price">
                <strong>{new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        }).format(price)}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map(()=><StarIcon className="star_icon"/>)
                    }
            </div>
            </div>
            <img src={image} alt="Product_1" />
            

            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product;

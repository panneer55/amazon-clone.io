import React, { useState, useEffect } from 'react'
import { useStateValue } from '../Store/StateProvider';
import { getBasketTotal } from '../Store/Reducer';
import CheckOutProduct from '../CheckOut/CheckOutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "../helper/axios";
import { db } from '../helper/firebase';
import "./Payment.css";


function Payment() {
    const history = useHistory();   
    const[{basket,user}, dispatch] =  useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(()=>{
        const getClientSecret = async ()=>{
            const response = await axios({
                method:"POST",
                url :  `/payments/create?total=${getBasketTotal(basket)}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret().catch(e=>{
            console.log(`Something went Wrong :  ${e.message}`);
        })
    },[basket]);


    const handleChange = (e)=>{
        setDisabled(e.empty);
        setError(e.error? e.error.message:"");

    }
    const handleSumbit = async(e)=>{

        e.preventDefault();
        setProcessing(true);
         const payload = await stripe.confirmCardPayment(clientSecret,{
             payment_method: {
                 card: elements.getElement(CardElement)
             }
         }).then(({paymentIntent})=>{

            db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent?.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
             setSucceeded(true);
             setError(null);
             setProcessing(false);

             dispatch({
                 type:"EMPTY_BASKET"
             })

             history.replace("/orders");
         })

    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    CheckOut ({<Link to="/checkout">{basket?.length} Items)</Link>}
                </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>242 React lane,</p>
                    <p>Salem-637101, India</p>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                   <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment_items">
                {
                    basket?.map(item=>(
                        <CheckOutProduct
                        id = {item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))
                }
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    <form onSubmit={handleSumbit} >
                    <CardElement onChange={handleChange}></CardElement>
                    <div className="payment_price_container">
                    <h1> Order Total : {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            }).format(getBasketTotal(basket))}
                    </h1>
                        <button disabled = {processing || disabled || succeeded}>
                                <span>
                                    {processing? <p>Processing</p>:"Buy Now"}
                                </span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                    

                    </form>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Payment

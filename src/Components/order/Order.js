import React from 'react';
import moment from 'moment';
import CheckOutProduct from '../CheckOut/CheckOutProduct';
import { getBasketTotal } from '../Store/Reducer';
import './Orders.css';


function Order({order}) {
   
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>
                    {order.id}
                </small>
            </p>
            {order.data.basket?.map(item=>(
                <CheckOutProduct
                        key={item.id}
                        id = {item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton={true}
                        />
            ))}
            <h2> Order Total : {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            }).format(getBasketTotal(order.data.basket))}
            </h2>
            

        </div>
    )
}

export default Order

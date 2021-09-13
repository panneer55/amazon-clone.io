import React from 'react';
import "./SubTotal.css";
import { useStateValue } from '../Store/StateProvider';
import { getBasketTotal } from '../Store/Reducer';
import { useHistory } from 'react-router';

function SubTotal() {
    const[{basket},dispatch] = useStateValue();
    // console.log(basket);
    const history = useHistory();

    return (
        <div className="subtotal">
                <p>
                        Subtotal ({basket?.length} items): <strong>{new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            }).format(getBasketTotal(basket))}</strong>
                </p>
                <small className = "subtotal_gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                <button onClick={e=>history.push("/payment")}>Proceed to checkOut</button>
        </div>
    )
}

export default SubTotal
   
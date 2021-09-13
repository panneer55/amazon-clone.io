import React from 'react';
import { useEffect , useState} from 'react';
import { db } from '../helper/firebase';
import { useStateValue } from '../Store/StateProvider';
import Order from "./Order";

function Orders() {
    const [{basket,user},dispatch] = useStateValue();
    const [orders,SetOrders] = useState([]);
    useEffect(()=>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy("created", "desc").
            onSnapshot(snapShot=>{
                SetOrders(snapShot.docs.map(doc=>({
                        id: doc.id,
                        data: doc.data()
                    })
                ))
            })
        }else{
            SetOrders([])
        }
    },[user])
    
    return (
        <div className="orders">
           <h1>Your Orders</h1>
           <div className="orders_order"> 
           {
               orders?.length >  0 ? "":"Your Cart is Empty"
           }   
               {
                   orders?.map(order=>(
                       <Order key={order.id} order={order}/>
                   )
                   )
               }
           </div>

        </div>
    )
}

export default Orders


import Cart from './Cart';
import './Cart.css'
import React from 'react';
class OnlineShopping extends React.Component{
    render()
    {
            const cartInfo =[{itemName:"Laptop", price:80000},
                {itemName:"TV", price:120000},
                {itemName:"Washing Machine", price:50000},
                {itemName:"Mobile", price:30000},
                {itemName:"Fridge", price:70000},
            ]

            return(
                <div className='mydiv'>
                    <h1>Items Ordered</h1>
                    <Cart item={cartInfo}></Cart>
                </div>
            )
    }
  
}
export default OnlineShopping;
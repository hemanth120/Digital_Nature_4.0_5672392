    import './Cart.css'
    const Cart=({item})=>
    { 
        return(
           
        <table>
             <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {item.map((i,index)=>{
                    return(
                <tr key ={index}>
                    <td>{i.itemName}</td>
                    <td>{i.price}</td>
                </tr>)})}
                </tbody>
                
        </table>
           
          )
 
    }
    export default Cart;
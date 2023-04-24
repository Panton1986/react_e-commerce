import { useContext } from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

function CartList() {
    const {
        order = [], 
        handleCartAppear = Function.prototype
    } = useContext(ShopContext);
    
    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price.finalPrice * elem.quantity
    }, 0)

    return <ul className="collection cart-list">
                <li className="collection-item active">Cart</li>     
                {
                    order.length ? order.map(item => (
                        <CartItem key={item.mainId} 
                                  {...item} />
                    )) : <li className="collection-item">The cart is empty</li>    
                }
                <li className="collection-item active">Total amount: {totalPrice}</li>
                
                <li className="collection-item"><button className="btn-small">Order</button></li>

                <i className="material-icons cart-close" onClick={handleCartAppear}>close</i>
            </ul>
};

export {CartList};
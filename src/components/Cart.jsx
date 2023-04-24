import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
    const {order, handleCartAppear = Function.prototype} = useContext(ShopContext);

    const quantity = order.length;

    return <div className="cart orange accent-2" onClick={handleCartAppear}>
                <i className="material-icons">shopping_cart</i>
                {quantity ? <span>{quantity}</span> : null}
            </div>
}

export {Cart};
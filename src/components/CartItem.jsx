import { useContext } from "react";
import { ShopContext } from "../context";

function CartItem (props) {
    const {
        mainId,
        displayName,
        price = [],
        displayAssets = [],
        quantity,
    } = props;

    const {removeFromCart, plusQuantity, minusQuantity} = useContext(ShopContext);

    return <li className="collection-item avatar"> {displayName}
                <img src={displayAssets[0].full_background} alt={displayName} className="circle" />
                <p>Quantity: 
                    <i className="material-icons cart-quantity" onClick={() => minusQuantity(mainId)}>remove</i> 
                    {' '}{quantity}{' '}
                    <i className="material-icons cart-quantity" onClick={() => plusQuantity(mainId)}>add</i>
                    <br />
                    Price: {quantity * price.finalPrice}
                </p>
                <span className="secondary-content" onClick={() => removeFromCart(mainId)}><i className="material-icons">close</i></span>
            </li>;
};

export {CartItem};
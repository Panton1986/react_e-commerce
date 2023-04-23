function CartItem (props) {
    const {
        mainId,
        displayName,
        price = [],
        displayAssets = [],
        quantity,
        removeFromCart = Function.prototype,
        plusQuantity = Function.prototype,
        minusQuantity = Function.prototype,
    } = props;

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
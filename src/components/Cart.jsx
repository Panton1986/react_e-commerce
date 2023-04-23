function Cart(props) {
    const {quantity = 0, handleCartAppear = Function.prototype} = props;

    return <div className="cart orange accent-2" onClick={handleCartAppear}>
                <i className="material-icons">shopping_cart</i>
                {quantity ? <span>{quantity}</span> : null}
            </div>
}

export {Cart};
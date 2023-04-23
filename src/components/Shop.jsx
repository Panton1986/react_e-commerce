import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { ItemsList } from "./ItemsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartAppear, setIsCartAppear] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(elem => elem.mainId === item.mainId);

        if (itemIndex < 0) {
            const newItem = {
            ...item,
            quantity:1
            }
            setOrder([...order, newItem]) 
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity:orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };

    const removeFromCart = (itemId) => {
        const newOrder = order.filter(elem => elem.mainId !== itemId);
        setOrder(newOrder);
    }

    const handleCartAppear = () => {
        setIsCartAppear(!isCartAppear);
    }

    const plusQuantity = (itemId) => {
        const newOrder = order.map(elem => {
            if (elem.mainId === itemId) {
                const newQuantity = elem.quantity + 1;
                return {
                    ...elem,
                    quantity: newQuantity
                } 
            }   else {
                    return elem;
                }
        });
        setOrder(newOrder);
    }

    const minusQuantity = (itemId) => {
        const newOrder = order.map(elem => {
            if (elem.mainId === itemId) {
                const newQuantity = elem.quantity - 1;
                return {
                    ...elem,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                } 
            }   else {
                    return elem;
                }
        });
        setOrder(newOrder);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {Authorization: API_KEY}
        })
        .then(response => response.json())
        .then(data => {
            data.shop && setItems(data.shop);
            setLoading(false);
        })
    }, [])

    return <main className="container content">
        <Cart quantity={order.length} handleCartAppear={handleCartAppear} />
        {loading ? <Preloader /> : <ItemsList items={items} addToBasket={addToBasket} />}
        {
            isCartAppear && 
                <CartList 
                    order={order} 
                    handleCartAppear={handleCartAppear} 
                    removeFromCart={removeFromCart} 
                    plusQuantity={plusQuantity} 
                    minusQuantity={minusQuantity} 
                />
        }
        {
            alertName && <Alert displayName = {alertName} closeAlert = {closeAlert}/>
        }
    </main>
}

export {Shop}
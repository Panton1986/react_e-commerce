import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    items: [],
    loading: true,
    order: [],
    isCartAppar: false,
    alertName: ''
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromCart = (itemId) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}})
    }
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }
    value.plusQuantity = (itemId) => {
        dispatch({type: 'PLUS_QUANTITY', payload: {id: itemId}})
    }
    value.minusQuantity = (itemId) => {
        dispatch({type: 'MINUS_QUANTITY', payload: {id: itemId}})
    }
    value.handleCartAppear = () => {
        dispatch({type: 'TOGGLE_CART_APPEAR'})
    }
    value.setItems = (data) => {
        dispatch({type: 'SET_ITEMS', payload: data})
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}
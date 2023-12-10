import React, { createContext } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = React.useState([])
    const addToCart = (item) => {
        const isItemCart = cartItems.find((data) => data.title === item.title)
        if (isItemCart) {
            setCartItems(
                cartItems.map((data) =>
                    data.title === item.title
                        ? { ...data, numberProduct: data.numberProduct + item.numberProduct }
                        : data

                ))
        }
        else {
            setCartItems([...cartItems, { ...item }])
        }
    };
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,

            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

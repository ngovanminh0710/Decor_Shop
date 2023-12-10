import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../component/cartItem';
import { ProductItem } from '../pages/shop'

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;
  console.log('cartItems:', cartItems);
  return (
    <div className='container'>
      <div className='border border-3 d-flex justify-content-center'>
        <h3>Sản Phẩm:</h3>
      </div>
      <div >
        {cartItems.map((item, index) => <CartItem key={index} data={item} />)}
      </div>

    </div>
  )
}

export default Cart
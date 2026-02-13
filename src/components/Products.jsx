import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, clearCart } from '../app/cartSlice';

const Products = () => {

  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total+item.price, 0)

  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          <p>{p.name}</p>
          <p>{p.price}</p>
          <button onClick={()=>dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
      <div>
        <h1>Cart</h1>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <button onClick={()=> dispatch(removeFromCart(item.id))}>Remove from cart</button>
            </div>
          ))}
      </div>
      <div>
        <h1>Total Price {totalPrice}</h1>
      </div>
      <div>
        <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Products

import React, { useReducer } from 'react'
import Products from '../components/Products'
import Cart from '../components/Cart'
import cartReducer from '../reducer/cartReducer'

const ShoppingCart = () => {

    const [cart , dispatch] = useReducer(cartReducer , [])

  return (

    <div className='min-h-screen bg-gray-100 p-6'>
        <div className='mx-auto max-w-6xl'>

           <h1 className='mb-8 text-center text-3xl font-bold text-blue-700'>
                 Shopping Cart
           </h1>

           <Products dispatch={dispatch} />

           <Cart cart={cart} dispatch={dispatch} />

           </div>
        </div>
  )
}

export default ShoppingCart
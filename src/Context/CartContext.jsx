import React, { Children, createContext, useContext, useReducer } from 'react'

const initialstate={};
const reducer=(state ,action)=>{
console.log(action);
}

const CartContext =createContext()
function CartProvider({children}) {
     const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
  )
}
const useCard =()=>{
  const {state,dispatch} =useContext(CartContext)
  return[state,dispatch]
  
}

export default CartProvider
export {useCard}
import React, { Children, createContext, useContext, useReducer } from 'react'
import { SumProducts } from '../Helpers/helper';

const initialstate={
  selectedItem :[],
  itemCounter:0,//tedad mahsol entekhab shode
  total:0,//majmoe qeimat mahsoolat entekhab shode
  checkOut:false//tasvie nshode

};
const reducer=(state ,action)=>{
switch (action.type) {
  case "ADD_ITEM":
   if(!state.selectedItem.find((item)=>item.id==action.payload.id))
    state.selectedItem.push({...action.payload,quantity:1});
  return{
    ...state,
    ...SumProducts(state.selectedItem),
    checkOut:false
  }
  

  default:
    throw new error("invalid Action!");
}
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
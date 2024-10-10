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
   if(!state.selectedItem.find((item)=>item.id==action.payload.id)){
    state.selectedItem.push({...action.payload,quantity:1});
   }
  return{
    ...state,
    ...SumProducts(state.selectedItem),
    checkOut:false
  }
  case "REMOVE_ITEM":
    const newSelectedItem = state.selectedItem.filter((item)=>item.id !== action.payload.id);
    return{
      ...state,
      selectedItem:[...newSelectedItem],
      ...SumProducts(newSelectedItem),
      checkOut:false,
    }
    case "INCREASE":
      const increaseIndex =state.selectedItem.findIndex((item)=>item.id ==action.payload.id)
      state.selectedItem[increaseIndex].quantity++;
      return{
        ...state,
        ...SumProducts(state.selectedItem),

      }
      case "DECREASE":
        const decreaseIndex=state.selectedItem.findIndex((item)=>item.id ==action.payload.id)
        state.selectedItem[decreaseIndex].quantity--;
        return{
          ...state,
          ...SumProducts(state.selectedItem),
        }
        case "CHECKOUT":
          return{
            selectedItem:[],
            itemCounter:0,
            total:0,
            checkOut:true
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
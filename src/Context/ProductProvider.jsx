import React, { createContext, useEffect, useState } from 'react'
import api from '../Services/api';

const ProductContext =createContext();
function ProductProvider({children}) {
  const [product,setproduct]=useState([]);
  useEffect(()=>{
    const fetchProduct = async ()=>{
    try {
        const response =await api.get("/products");
        setproduct (response)
    } catch (error) {
      console.log(error.message);
    }
    fetchProduct();
  },[]})
  return (
  <ProductContext.Provider value={product}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider
import React from 'react'
import { useProduct } from '../Context/ProductProvider'
function ProductPage() {
  const products= useProduct()
  console.log(products);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage
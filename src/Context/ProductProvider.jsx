import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/api";

const ProductContext = createContext();
function ProductProvider({ children }) {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setproduct(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}
const useProduct = () => {
  const product = useContext(ProductContext);
  return product;
};
const useProductDetail = (id) => {
  const product = useContext(ProductContext);
  const result = product.find((item) => item.id == id);
  return result;
};
export default ProductProvider;
export { useProduct, useProductDetail };

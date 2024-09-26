import Card from "../Components/Card";
import { FaListUl } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import Loader from "../Components/Loader";
import { useProduct } from "../Context/ProductProvider";
import styles from "../pages/productPage.module.css"
import { useState } from "react";
function ProductPage() {
  const products = useProduct();
 
  const [search,setsearch] =useState("");
  const SearchHandler =()=>{

  }
  const categoryHandler =(event)=>{
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase()
    if(tagName!="LI") return;
    console.log(category);
  }
  return (
    <>
    <div>
      <input type="text" placeholder="Search..." value={search} onChange={e=>setsearch(e.target.value.toLocaleLowerCase().trim())} />
      <button onClick={SearchHandler}><ImSearch /></button>
    </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && (<Loader />)}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductPage;

import Card from "../Components/Card";
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
        <div>Side Bar</div>
      </div>
    </>
  );
}

export default ProductPage;

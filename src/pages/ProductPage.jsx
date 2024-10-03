import Card from "../Components/Card";
import { createQueryObject } from "../Helpers/helper";
import { FaListUl } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import Loader from "../Components/Loader";
import { useProduct } from "../Context/ProductProvider";
import styles from "../pages/productPage.module.css";
import { useEffect, useState } from "react";
import { Filterproducts, SearchProducts } from "../Helpers/helper";
import { useSearchParams } from "react-router-dom";
function ProductPage() {
  const products = useProduct();
  const [displayed, setDisplayed] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState({});
  const [serchparam,setsearchparam] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setsearchparam(query)
    let finalProducts = SearchProducts (products ,query.search);
      console.log(finalProducts);
      finalProducts =Filterproducts(finalProducts,query.category)
      setDisplayed(finalProducts)
    
  }, [query]);


 

  const SearchHandler = () => {
    setquery((query) => createQueryObject(query,{search}) );
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName != "LI") return;
    setquery((query) => createQueryObject(query,{category}));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setsearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={SearchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
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

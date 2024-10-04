import Card from "../Components/Card";
import { createQueryObject, getinitialQuery } from "../Helpers/helper";
import Loader from "../Components/Loader";
import { useProduct } from "../Context/ProductProvider";
import styles from "../pages/productPage.module.css";
import { useEffect, useState } from "react";
import { Filterproducts, SearchProducts } from "../Helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import SideBar from "../Components/SideBar";
function ProductPage() {
  const products = useProduct();
  const [displayed, setDisplayed] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState({});
  const [serchparam, setsearchparam] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setquery(getinitialQuery(serchparam));
  }, [products]);

  useEffect(() => {
    setsearchparam(query);
    setsearch(query.search || "");
    let finalProducts = SearchProducts(products, query.search);
    console.log(finalProducts);
    finalProducts = Filterproducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setsearch={setsearch} setquery={setquery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar setquery={setquery} query={query} />
      </div>
    </>
  );
}

export default ProductPage;

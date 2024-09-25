import Card from "../Components/Card";
import { useProduct } from "../Context/ProductProvider";
import styles from "../pages/productPage.module.css"
function ProductPage() {
  const products = useProduct();
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && (<p>loading...</p>)}
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

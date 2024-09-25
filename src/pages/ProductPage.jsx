import { useProduct } from "../Context/ProductProvider";
import styles from "../pages/productPage.module.css"
function ProductPage() {
  const products = useProduct();
  console.log(products);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.products}>
          {products.map((p) => (
            <p key={p.id}>{p.title}</p>
          ))}
          {!products.lenght && (<p>loading...</p>)}
        </div>
        <div>Side Bar</div>
      </div>
    </>
  );
}

export default ProductPage;

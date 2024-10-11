import BasketCard from "../Components/BasketCard";
import { useCard } from "../Context/CartContext";
import styles from "../Components/Checkout.module.css";
import BasketSidebir from "../Components/BasketSidebir";

function CheckOutpage() {
  const [state, dispatch] = useCard();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {state.selectedItem.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <div>
        <BasketSidebir state={state} clickHandler={clickHandler} />
      </div>
    </div>
  );
}

export default CheckOutpage;

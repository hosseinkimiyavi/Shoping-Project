import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../Helpers/helper";
import styles from "./card.module.css";
import { useCard } from "../Context/CartContext";
function Card({ data }) {
  const { title, id, price, image } = data;
  const [state, dispatch] = useCard();
  const quantity = productQuantity(state, id);
  console.log(quantity)
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/product/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity == 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity == 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

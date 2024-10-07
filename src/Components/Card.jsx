
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../Helpers/helper";
import styles from "./card.module.css";
import { useCard } from "../Context/CartContext";
function Card({data} ) {
  const { title, id, price, image } = data;
 const [state,dispatch] = useCard()
 const clickHandler =()=>{
  dispatch({type:"add",payload:data})
 }
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
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default Card;

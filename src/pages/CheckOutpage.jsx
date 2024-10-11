import BasketCard from "../Components/BasketCard";
import { useCard } from "../Context/CartContext";
function CheckOutpage() {
  const [state,dispatch] =useCard();
  const clickHandler =(type,payload)=>dispatch({type,payload})
  return (
    <div>
      <div>
        {state.selectedItem.map((product)=>(
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        )

        )}
      </div>
    </div>
  )
}

export default CheckOutpage
import { Link } from "react-router-dom"
import {PiShoppingCartSimpleBold} from "react-icons/pi"
import { useCard } from "../Context/CartContext"
import styles from "./layout.module.css"

function Layout({children}) {
    const [state] =useCard()
  return (
    <>
    <header className={styles.header}>
        <Link to={"/product"}>KM Shop</Link>
        <Link to={"/CheckOut"}>
        <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
        </div>
        </Link>

    </header>
    {children}
    <footer className={styles.footer}><h3>Developed By Hossein Kimiyavi</h3></footer>
    </>
  )
}

export default Layout
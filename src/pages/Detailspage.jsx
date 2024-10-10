import { Link, useParams } from "react-router-dom"
import { useProductDetail } from "../Context/ProductProvider"
import {SiOpenproject} from "react-icons/si"
import {IoMdPricetag} from "react-icons/io"
import {FaArrowLeft} from "react-icons/fa"
import Loader from "../Components/Loader"
import styles from "./detailPage.module.css"

function Detailspage() {
  const {id} =useParams()
  const productDetail =useProductDetail(+id)
  if(!productDetail) return <Loader />
  return (
    <div className={styles.container}>
      <img src={productDetail.image} alt={productDetail.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetail.title}</h3>
        <p className={styles.description}>{productDetail.description}</p>
        <p className={styles.category}><SiOpenproject />{productDetail.category}</p>
        <div>
          <span className={styles.price}><IoMdPricetag />{productDetail.price} $</span>
          <Link to={"/product"}>
          <FaArrowLeft />
          <span> Back to Shop</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Detailspage
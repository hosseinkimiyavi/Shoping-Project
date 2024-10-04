import { FaListUl } from "react-icons/fa";
import { createQueryObject } from '../Helpers/helper';
import styles from "./sidebar.module.css"
import { categories } from "../Constant/list";

function SideBar({setquery,query}) {
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLocaleLowerCase();
        if (tagName != "LI") return;
        setquery((query) => createQueryObject(query, { category }));
      };
  return (
    <div className={styles.sidebar}>
    <div>
      <FaListUl />
      <p>Categories</p>
    </div>
    <ul onClick={categoryHandler}>
    {categories.map((item)=><li key={item.id} className={item.type.toLocaleLowerCase()==query.category ?styles.selected : null}>{item.type}</li>)}
    </ul>
  </div>
  )
}

export default SideBar
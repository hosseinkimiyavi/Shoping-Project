import { FaListUl } from "react-icons/fa";
import { createQueryObject } from '../Helpers/helper';

function SideBar({setquery}) {
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLocaleLowerCase();
        if (tagName != "LI") return;
        setquery((query) => createQueryObject(query, { category }));
      };
  return (
    <div>
    <div>
      <FaListUl />
      <p>Categories</p>
    </div>
    <ul onClick={categoryHandler}>
      <li>All</li>
      <li>Electronics</li>
      <li>Jewelery</li>
      <li>Men's Clothing</li>
      <li>Women's Clothing</li>
    </ul>
  </div>
  )
}

export default SideBar
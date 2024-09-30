const shortenText = (text)=>{
return text.split(" ").slice(0,3).join("")
}

const SearchProducts =(products,search)=>{  //handle serchbox and filter
if(!search)return products;
const SearchedProducts = products.filter((p)=>
    p.title.toLowerCase().includes(search));
    return SearchedProducts;
};

const Filterproducts =(products ,category)=>{
    if(!category) return products;
    const Filteredproducts = products.filter((p)=>p.category==category);
    return Filteredproducts;
}


export {shortenText ,SearchProducts,Filterproducts}
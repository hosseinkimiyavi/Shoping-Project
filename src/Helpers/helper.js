const shortenText = (text)=>{
return text.split(" ").slice(0,3).join("")
}

const SearchProducts =(products,search)=>{  //handle serchbox and filter
if(!search)return products;
const SearchedProducts = products.filter((p)=>
    p.title.toLowerCase().includes(search));
    return SearchedProducts;
};
const createQueryObject =(currentquery,newquery)=>{
    if(newquery.category=="all"){
      const {category,...rest} =currentquery;
      return rest
    }
    if(newquery.search ==""){
        const {search,...rest} =currentquery
        return rest
    }
    return {...currentquery,...newquery}
  }

  const getinitialQuery =(searhparams)=>{
    const query ={}
    const category =searhparams.get("category")
    const search =searhparams.get("search")
    if (category) query.category=category
    if(search) query.search=search
    return query
  }

const Filterproducts =(products ,category)=>{
    if(!category) return products;
    const Filteredproducts = products.filter((p)=>p.category==category);
    return Filteredproducts;
}


export {shortenText ,SearchProducts,Filterproducts ,createQueryObject,getinitialQuery}
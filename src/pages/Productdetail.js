import React ,{useEffect ,useState}from 'react'
import Errorpage from './Errorpage'
// import { useParams } from "react-router-dom";
// const { pid } = useParams();
export default function Productdetail(props) {
const[products,setproduct]=useState([])
const[productId,setproductid]=useState(props.match.params.pid)

// const[productId,setproductid]=useState({pid})

useEffect(()=>{
    
    fetch("/iphone.json").then((response)=>response.json()).then((products)=>{
        const productList=products.products;
       console.log(productList)
       const singleProduct = productList.filter(
        (x) => x.product_url ==productId
      );
       setproduct(singleProduct)
    })
   
},[])
console.log(products)
if(products.length){
    return ( 
            <div>
           
            <div  >
                {products.map(
(product)=>{
    let id = product.product_url;
    let title = product.product_name;
    let img = product.product_img;
    let description = product.product_description;
    let StartPrice = product.starting_price;
    let PriceRange = product.price_range;
    let productPage = "/iphone/" + id;
    let details = product.product_brief_description;
let showdetailproduct=(
    <div className="iphone-div" key={id}>
    <div className="iphone-detail">{title}</div>
    <div className="blast">{description}</div>
    <div className="row ">
                    <div className="col-sm-12 col-md-6 my-auto ">
             
             <div className="price-tag">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="price-tag">{PriceRange}</div>
                  <div className="price-tag">{details}</div>
                    </div>
                    <div className={`col-sm-12 col-md-6 `}>
                        <div className="iphone-img" >
                            <img src={img}/>
                        </div>
                    </div>
        
                </div>
                  </div>
);
return showdetailproduct;
}
                )}
            </div>
        </div>
    )
}
else{
    return(
            <Errorpage/>
      
    )
}
}

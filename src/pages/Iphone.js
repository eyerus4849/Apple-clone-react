import React , { useEffect, useState } from "react";
import {Link} from "react-router-dom"
function Iphone() {
   const [product, setproduct] = useState([]);
  //  http://localhost:1234/iphones
   useEffect(()=>{
       fetch("http://localhost:1234/iphones").then((response)=>response.json()).then((product)=>{
        
           setproduct(()=>product.products);
           console.log(product)
       }
       );
       
      
   },[]);
   
  //  console.log(product)
   let order = 1;
    return (
        <div>
             <div className="iphones"></div>
            <div className="iphone-12">Iphones</div>
            <div className="blast">The best for the brightest</div>
            {/* {product} */}
{
    product.map((product)=>{
        let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let description = product.product_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + id;
            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }
            let showproduct=(
                <div className="iphone-div">
                <div className="row iphone-div ">
                    <div className={`col-sm-12 col-md-6 my-auto order-md-${order1}`}>
             <div className="iphone-12">{title}</div>
             <div className="price-tag">{description}</div>
             
             <div className="price-tag">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="price-tag">{PriceRange}</div>
                  <div className="links">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 order-md-${order2}`}>
                        <div className="iphone-img" >
                            <img src={img}/>
                        </div>
                    </div>
        
                </div>
                </div>
            );
            return showproduct;
    })
}

            
        </div>
    )
}

export default Iphone

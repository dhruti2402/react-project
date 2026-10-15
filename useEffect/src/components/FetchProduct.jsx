import React from 'react';
import "./FetchProduct.css";
import { useState,useEffect } from 'react';

const FetchProduct =()=> {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
      getProduct();
    }, [])
    

  async function getProduct() {

    try{
           const url = "https://dummyjson.com/products";
            let response = await fetch(url);

                    if (!response.ok){
                        throw new Error("error in fetching data")
                    } 

              response = await response.json();
              console.log(response.products); 
              setproducts(response.products)     

    }catch(err){
        seterror(err.message)

    }finally{
      setloading(false)
    }
    
  }


  if (loading){
    return <h1>Loading....</h1>
  }

  if (error){
    return <h1>error : {error}</h1>
  }

  return (
    <div className='main-container'>
        <h1>Product List :</h1>

        {products && products.map((product)=>
        
             <ul key={product.id} className='product-list'>
                <li><img src={product.thumbnail} alt={product.title} /></li>

                <div className='info'>
                      <li id='title'>{product.title}</li>
                      <li id='price'>Price: ${product.price}</li>
                </div>
                
             </ul>
        
        )}


    </div>
  )
}

export default FetchProduct
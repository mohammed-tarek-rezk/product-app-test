import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'

function ProductDetails() {
    let {id}  = useParams()
    let [product , setProduct] = useState(false)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((res)=> res.json()).then(res => setProduct(res))
    }, [id])
  return product && (
      <div className='my-4 container m-auto'>
          <Product product={product} fullDetails={true} />
      </div>
  )
}

export default ProductDetails
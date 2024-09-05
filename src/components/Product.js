import React from 'react'
import ProductImage from './ProductImage'
import ProductTitle from './ProductTitle'
import { Link } from 'react-router-dom'

function Product({product , fullDetails = false} ) {
  return !fullDetails ? (
    <Link to={`/products/${product.id}`}>
    <div className={` rounded-lg shadow-lg  p-4 ${fullDetails ? "md:flex": ""}`}>
      <ProductImage src= {product.image} />
      <div>
      <ProductTitle title = {product.title} />
      <div className={` text-sm text-gray-400 ${!fullDetails ? "line-clamp-3  h-[65px]" : ""} my-2 `} >{product.description}</div>
      <div className='my-2 font-bold'> {product.category}</div>
      <div className='text-blue-900 font-bold text-2xl'>{product.price}$</div>
      <div className='flex justify-between items-center'><span className="flex justify-center items-center font-bold w-10 h-10 rounded-full bg-yellow-300 ">{product.rating.rate} </span> <span>{product.rating.count}</span></div>
      </div>
    </div>
    </Link>
  )  : (
    <div className={` rounded-lg shadow-lg  p-4 ${fullDetails ? "md:flex": ""}`}>
      <ProductImage src= {product.image} />
      <div>
      <ProductTitle title = {product.title} />
      <div className={` text-sm text-gray-400 ${!fullDetails ? "line-clamp-3  h-[65px]" : ""} my-2 `} >{product.description}</div>
      <div className='my-2 font-bold'> {product.category}</div>
      <div className='text-blue-900 font-bold text-2xl'>{product.price}$</div>
      <div className='flex justify-between items-center'><span className="flex justify-center items-center font-bold w-10 h-10 rounded-full bg-yellow-300 ">{product.rating.rate} </span> <span>{product.rating.count}</span></div>
      </div>
    </div>
  ) 
}

export default Product
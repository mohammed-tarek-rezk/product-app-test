import React, { useEffect, useState } from 'react'
import products from "./../data/products"
import Product from './Product'
import Categories from './Categories'
function Products() {
  let [p , setP] = useState(products)
  let [search , setSearch] = useState("")
  useEffect(()=>{
    document.addEventListener("keyup", (e)=>{
      if(e.target.classList.contains("search")){
        setSearch(e.target.value)
      }
    })

  },[p])
  return (
    <>
    <div className='container flex gap-4 w-full px-5 py-2 m-auto my-5'>
    {["All","men's clothing", 'jewelery', 'electronics', "women's clothing"].map((el)=> <Categories key={el} category ={el} setP = {setP} products={products}/>)}
    </div>
    <div className='md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 container m-auto my-5'>
      {p.filter((el)=> el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((el)=> <Product key={el.id} product = {el} fullDetails={false}/>)}
    </div>
    </>
  )
}

export default Products

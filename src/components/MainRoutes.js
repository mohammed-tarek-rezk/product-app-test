import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from './Products'
import About from '../pages/About'
import Product from './Product'
import ProductDetails from './ProductDetails'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Outlet />} >
          <Route path='' element={<Products />} />
          <Route path=':id' element={<ProductDetails  />} />
        </Route>
        <Route path='/About' element={<About />} />
    </Routes>
  )
}

export default MainRoutes
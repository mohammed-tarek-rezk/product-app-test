import React from 'react'
import menu from "./../data/nav"
import NavLink from './NavLink'
function HeaderNav() {
  return (
    <ul className='flex '>
      {
        menu.map((el)=> <li key={el.title}><NavLink title={el.title} link ={el.link}/></li>)
      }
    </ul>
  )
}

export default HeaderNav
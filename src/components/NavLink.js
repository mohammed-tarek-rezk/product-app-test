import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({title , link}) {
  return (
    <Link to={link} className=' block px-3 py-2  hover:bg-blue-50 transition-all hover:text-blue-900'>{title}</Link>
  )
}

export default NavLink
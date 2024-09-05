import React from 'react'
import Logo from './Logo'
import HeaderNav from './HeaderNav'
import Search from './Search'

function Header() {
  return (
    <header className=' flex-col md:flex-row container flex justify-between m-auto px-4 items-center mt-2 '>
        <Logo/>
        <Search />
        <HeaderNav />
    </header>
  )
}

export default Header
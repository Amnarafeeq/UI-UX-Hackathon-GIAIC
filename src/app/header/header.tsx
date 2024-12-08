import React from 'react'
import TopHeader from './top-bar'
import TopBar from './top-bar'
import Navbar from './navbar'

const Header = () => {
  return (
    <header className='h-[136px] '>
        <TopBar/>
        <Navbar/>

    </header>
  )
}

export default Header
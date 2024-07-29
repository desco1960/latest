import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { BiLogIn } from 'react-icons/bi'
import { BiFace } from 'react-icons/bi'
import 



function Navbar() {
  return (

    <>
<div>
<nav className='first-nav'>

  <h2>BestShop</h2>
  
  
  <div className='search-con'> 
    <form className='f1'>
      <input type="search" placeholder='search product...' />
      <button className='s1'>All Categories <MdArrowDropDown/> </button>
      <button className='s2'>search</button>
    </form>
  </div>
  
  <div>  </div>
</nav>
</div>


 <div>
      <nav className='navbar'>
        <li>HOME</li>     
        <li>FEATURES</li>
        <li>COLLECTIONS</li>
        <li>SHOP</li>
        <li>ABOUT US</li>
        <li className='contact'>CONTACT US</li>
        <li className='sp' style={{color:'gold'}} >SPECIAL OFFERS</li>
        <li>PURCHASE THEME</li>

      </nav>
    </div>


    </>


   
  )
}

export default Navbar

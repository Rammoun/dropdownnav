import React from 'react';
import './Nav.css';

const Nav=(props)=>{
  return(
    <ul className='menu'>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">Dropdown</a>
          <ul class="dropdown-content">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 1</a></li>          
          </ul>          
      </li>
      {props.children}
    </ul>
  )
}

export default Nav;
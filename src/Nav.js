import React from 'react';
import Menu from './data/Menu';


const Nav = () => {
  return (
    <nav>
      <ul>
        { 
          Menu.map((item, i) => {
            return ( <li key={i}>{item.children}</li> )
          })
        }
      </ul>
    </nav>
  )
};


export default Nav;

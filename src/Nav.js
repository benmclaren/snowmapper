import React from 'react';
import Menu from './data/Menu';


const Nav = () => {
  return (
    <nav className="flex container m-auto justify-between text-gray-50 font-medium">
      <h1 className="text-2xl">SnowMapper</h1>
      <ul className="flex">
        { 
          Menu.map((item, i) => {
            return ( <li key={i} className="pl-3">{item.children}</li> )
          })
        }
      </ul>
    </nav>
  )
};


export default Nav;

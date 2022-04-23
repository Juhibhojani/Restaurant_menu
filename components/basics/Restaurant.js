import React, { useState } from 'react';
import "./style.css";
import Menu from './menuAPI';
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList = [...new Set(
  Menu.map((curElem) => {
  return curElem.category;
    }),
),"All",];

const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);
    // given function is used to show items of given category

    const filterItem = (category) =>{
      if(category === "All"){
        setmenuData(Menu);
        return;
      }

      const updatedList = Menu.filter((curElem) =>{
        return curElem.category === category;
      });
      setmenuData(updatedList);
    };

    return (
    <>
    <NavBar filterItem = {filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/> 
    </>
  )
}

export default Restaurant

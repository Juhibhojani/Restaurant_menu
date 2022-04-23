import React from 'react'

const NavBar = ({filterItem , menuList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
          {
              menuList.map((category) => {
                return ( <button 
                    className='btn-group__item' onClick={() => filterItem(category)}>{category}</button>
                    );
              })
          }
      </div>
    </nav>
    </>
  )
}

export default NavBar

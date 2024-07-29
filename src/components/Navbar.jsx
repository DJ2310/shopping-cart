import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from '../contexts/AppContext';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const {totalItems,getTotalItems,cartItems,category,handleCategory} = useContext(AppContext);
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(()=>{
    getTotalItems();
  },[cartItems])
  return (
    <div className='bg-blue-950 text-xl text-white'>
      <div className='w-10/12 mx-auto flex flex-wrap justify-between pt-[4px]'>
          <div>
            <NavLink className= {" flex items-center justify-center"}to={"/"}>
            <span className='text-white p-2 '>
              STYX Cart
            </span>
            </NavLink>            
          </div>

          {
            pathname!="/cart" ? <div className="text-gray-700 p-2 text-lg ">
            <select className="text-base justify-center" value={category} onChange={handleCategory}>
              <option className=" justify-center" value="all">All</option>
              <option className="justify-center" value="men's clothing">Men</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women</option>
            </select>
          </div> :<></>
          }

          
    
          <div className='flex py-2 '>
      
          <NavLink className={"flex items-center justify-center px-4"}to={"/cart"}>
          <div className='relative'>
          <FaShoppingCart className=' text-white hover:text-blue-400 text-2xl'/>
          <div className='flex items-center justify-center absolute right-[-8px] top-[-8px] text-xs 
          w-5 h-5 bg-white text-blue-950 border-2 border-blue-950 rounded-full font-bold animate-bounce'>
            {totalItems}
          </div>
          </div>
          </NavLink>

          </div>
        

      </div>
      
      
    </div>
  )
}

export default Navbar

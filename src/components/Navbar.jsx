import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from '../contexts/AppContext';

function Navbar() {
  const {totalItems,getTotalItems,cartItems} = useContext(AppContext);
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
    
          <div className='flex py-2 '>
          <NavLink className="px-4 hover:text-blue-400" to={"/"}>
          <button >
            Home
          </button>
          </NavLink>
        
      
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

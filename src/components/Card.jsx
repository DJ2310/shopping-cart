import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { MdDelete } from "react-icons/md";

function Card({data}) {
    const {addToCart,removeFromCart,decQuantity,incQuantity,getItemQuantity} = useContext(AppContext);
    
  return (
        <div className='flex-col bg-white rounded-lg mt-[40px] ml-5 w-[90%]
              group hover:scale-110 transition duration-300 ease-in  
              shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]'>
          <div className='w-full flex flex-col items-center justify-center content-center p-4'>
          <p className='w-40 truncate mt-1 text-gray-700 font-semibold text-lg ' >
            {data.title}
          </p>
          <p className='w-40 truncate text-gray-400 font-normal text-[10px] '>
            {data.description}
          </p>
          </div>
          <div className='h-[180px] mt-[20px] p-4'>
            <img src={data.image} className='h-full w-full object-contain'>
            </img>
          </div>
          <div className='w-full mt-[50px] p-6 flex justify-between items-center'>
        
            <div className='text-lg font-bold text-green-600'>
            ${data.price}
            </div>
            {
            (getItemQuantity(data.id)>0)?(
              <div className=' group flex transition duration-300 ease-linear'>
                <div className='flex items-center border-2  select-none border-blue-950 text-blue-950 rounded-full '>
                <button className=" px-2  text-lg font-bold" onClick={()=>incQuantity(data.id)}>+</button>
                <span className=" px-2   text-lg font-bold cursor-pointer">{getItemQuantity(data.id)}</span>
                <button  className=" px-2 text-lg font-bold"onClick={()=>decQuantity(data.id)}>-</button>
                </div>
                <button className='hover:bg-red-600 hover:text-red-200 bg-red-200 text-red-600  ml-2 p-2 rounded-full ' onClick={()=>removeFromCart(data.id)}>
                <MdDelete className='text-lg font-bold'/>
                </button>
              </div>
            ) :(
              <div>
                <button className="hover:bg-blue-950 hover:text-white border-2 select-none border-blue-950 text-blue-950
                  transition duration-300 ease-linear px-4 text-lg  rounded-full"
                  onClick={()=>addToCart(data)}>
                  Add to cart
                </button>
              </div>

            )
          }
          
          
          </div>
        </div>
  )
}

export default Card

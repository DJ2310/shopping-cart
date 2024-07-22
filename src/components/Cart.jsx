import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom';

function Cart() {
  const {cartItems,totalItems,cartTotal,getCartTotal,incQuantity,
    decQuantity,getItemQuantity,removeFromCart}= useContext(AppContext);
  useEffect(()=>{
    getCartTotal()
  },[cartItems])
  return (
    <div className='min-h-[94vh] max-w-[1200px] flex flex-col md:flex-row md:justify-center  mx-auto '>
        <div className='flex flex-col w-[100%]   bg-white'>
        {
          totalItems===0? 
          (<div className='w-full h-full  flex flex-col justify-center items-center pb-10 pt-10'>
            <p className='font-semibold pb-10 text-3xl'>Your cart is empty </p>
            <Link className=' w-[50%] mt-[10px] font-semibold py-2 px-2 text-center
             text-blue-950 border-2 border-blue-950
             hover:bg-blue-950 hover:text-white
             rounded-full ' to='/'>Continue Shopping</Link>
          </div>):
          <div>
            {
              cartItems.map((item)=>{
                return(
                <div className='m-10 mb-0 flex flex-col '>
                  <div className='flex '>
                        <div className='min-w-[50%] max-w-[50%] sm:min-w-[30%] lg:min-w-[30%] lg:max-w-[30%] object-cover'>
                              <img src={item.image}/>
                        </div>
    
                        <div className='flex flex-col mx-5 lg:mx-10'>
                            <div className="text-xl font-semibold">
                              {item.title}
                              </div>
    
                            <div className='text-lg font-bold text-green-600 pb-3 mt-[20px]'>
                              $ {item.price}
                              </div>
                            <div className={`w-[150px] flex justify-between items-center border-2  
                            select-none border-blue-950 text-blue-950 rounded-full `}>
                                  <button className=" px-4 text-lg font-bold" onClick={()=>incQuantity(item.id)}>+</button>
                                  <div className='h-[20px] w-[1.5px] bg-blue-950 '></div>
                                  <span className=" px-4  text-lg font-bold cursor-pointer">{getItemQuantity(item.id)}</span>
                                  <div className='h-[20px] w-[1.5px] bg-blue-950 '> </div>
                                  <button  className=" px-4 text-lg font-bold"onClick={()=>decQuantity(item.id)}>-</button>
                            </div>
                            
    
                            <button className='h-[30px] w-[150px] hover:bg-red-600 hover:text-white text-base
                            font-semibold text-red-600 bg-red-200 rounded-full px-2 mt-[20px] border-[1px] border-red-600'
                            onClick={()=>removeFromCart(item.id)}>
                              Remove from cart
                            </button>
                         </div>
                   </div>
    
                  <div className='w-full min-h-[1px] bg-blue-950 mt-10'>
                  </div>
                </div>
                ) 
              })
            }
          </div>
            
          
        }
        </div>
        <div className='mt-5 mb-5 md:items-start md:pl-6 md:mt-10 lg:m-10 lg:px-6 
        flex flex-col w-[100%] md:w-[40%] items-center gap-3'>
          <p className='text-xl font-semibold'>YOUR CART</p>
          <p className='text-3xl font-bold'>SUMMARY</p>
          <p className='font-semi-bold text-lg'>Total Items : {totalItems}</p>
          <p className='font-semi-bold text-lg'>Total Amount : $ {cartTotal}</p>
          <button className='mt-[10px] text-base py-2 px-2 w-[70%] rounded-full bg-blue-950 text-white'>
            Checkout Now
          </button>
          
        </div>
      
    </div>
  )
}

export default Cart

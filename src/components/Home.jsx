import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Card from './Card';
import { useState } from 'react';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

function Home() {
    const {products,category} = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);


    const filteredProducts = products.filter((product) => {
      return (
        (category === "all" || product.category === category)
      );
    });

    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };


  return (
    <div className='min-h-[94vh] '>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2'>
          {
            currentItems.map((product)=>{
                return <Card key={product.id} data={product}/>
            })
          }
        </div>

            <div className='flex justify-center right-[42%] m-10 gap-4'>
              {currentPage != 1? 
              <button className=' bg-white border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2' onClick={handlePreviousPage} >
                    <IoIosArrowBack/>
              </button> : <div className='w-[35px]'></div>
                }
                
                <span className=' items-center justify-center bg-white border-2 text-lg 
                shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 px-4'> {currentPage} </span>
                {!(indexOfLastItem >= products.length)? <button
                    className=' bg-white border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2'
                    onClick={handleNextPage}
                    disabled={indexOfLastItem >= products.length}
                >
                   <IoIosArrowForward/>
                </button> : <div className='w-[35px]'></div>}
                
            </div>
      
    </div>
  )
}

export default Home

import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Card from './Card';

function Home() {
    const {products} = useContext(AppContext);
  return (
    <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2'>
        {
            products.map((product)=>{
                return <Card key={product.id} data={product}/>
            })
        }
      
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'

const Bag = () => {
  
    const[bags, setBags] = useState([])

    const fetchUrl = async() =>{
        let response = await fetch('https://proud-barracuda.cyclic.app/api/bags/all');
        let data = await response.json();
        console.log(data)
        setBags(data)
    }
    useEffect(()=>{
        fetchUrl()
    },[])
  return (
    <>
            <h1 className='text-center sm:text-6xl text-4xl'>Bags</h1>
        <div className='grid grid-cols-1 sm:grid-cols-5  md:grid-cols-5 gap-10 justify-items-center mt-10'>

            {bags.map((item,id)=>(
                <div key={id} className=' text-center p-10'>
                        <p className='text-2xl font-bold'>{item.title.toUpperCase()}</p>
                        <div className='flex justify-center items-center'><img src={item.images} alt="" 
                         className='w-[200px] h-[200px] '/></div>
                        <p className='text-2xl font-extralight'> rs. {item.currPrice}</p>
                        <p className='text-[16px] font-semibold'>{item.description}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Bag
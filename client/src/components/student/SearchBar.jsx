import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { data, useNavigate } from 'react-router-dom'

export const SearchBar = () => {

    const navigate = useNavigate({data})

    const[input, setInput] = useState( data ? data : '')

    const onSearchHandler =(e) => {
      e.preventDefault()
      navigate('/Course-List/' + input)
    }
  return (
  
        <form onSubmit={onSearchHandler} 
        className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white
        border border-grey-500/20 rounded'>
          <img src={assets.search_icon} alt='Search_Icon' className='md:w-auto w-10
          px-3' />
          <input  onChange={e=> setInput(e.target.value)} value = {input.data}
            type="text" placeholder='Search For Courses' className='w-full
          h-full outline-none text-grey-500/80' />
          <button type='submit' className='bg-blue-600 rounded text-white md:px-10
          px-7 md:py-3 py-2 mx-1'>Search</button>
        </form>



    
  )
}

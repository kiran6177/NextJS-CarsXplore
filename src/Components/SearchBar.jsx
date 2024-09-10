"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
    const [manufacturer,setManuFacturer] = useState('')
    const handleSearch = ()=>{

    }
  return (
    <form className='flex items-center w-[70%]' onSubmit={handleSearch}>
        <div className='w-[100%]'>
            <SearchManufacturer
            manufacturer={manufacturer}
            setManuFacturer={setManuFacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar

'use client'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import useProductsStore from '@/store/useProductStore'

const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>('')
  const {searchByName, displayedProducts} = useProductsStore()
  console.log({displayedProducts});
  return (
      <form className='search-bar w-full flex py-8 px-4 md:px-0' onSubmit={(e) => {
        e.preventDefault()
        searchByName(keyword)
        }}>
        <input className="w-full border border-black border-r-0 rounded-l p-2" type="text" onChange={(e) => setKeyword(e.target.value)} />
        <button className="bg-btn w-24 rounded-r border border-black border-l-0" type="submit"><AiOutlineSearch className="mx-auto text-3xl" /></button>
      </form>
  )
}

export default SearchBar
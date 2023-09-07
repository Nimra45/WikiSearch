'use client'
import React from 'react'
import {useState} from "react"
import {useRouter} from "next/navigation"
 
export default function Search() {
  
  const [search, setSearch]= useState('')
  const router= useRouter()

//   the handleSubmit function will handle the submit and will change the route. 
  const handleSubmit = async(e :React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}/`)
  }

    return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
      {/* the input will set the state of search as the text is changed */}
      <input
       type="text" value={search}
       onChange={(e)=>{
        setSearch(e.target.value)
       }}
       className='bg-white p-2 w-80 text-xl rounded-xl'
        placeholder='Search'/>

     <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold" >
       🚀
     </button>

    </form>
  )
}


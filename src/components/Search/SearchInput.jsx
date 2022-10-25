import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const SearchInput = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault()
    navigate("/search/" + input)
  }

  return (
    <form onSubmit={handleSubmit} className='form-control w-full max-w-xs'>
        <label className='label'>
          <span>Search an item</span>
        </label>
        <input 
          type="text" 
          value={input}
          placeholder="e.g. cake, spaghetti, etc." 
          className="input input-bordered input-primary w-full max-w-xs" 
          onChange={(e) => setInput(e.target.value)}
        />
    </form>
  )
}

export default SearchInput
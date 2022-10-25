import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 w-full flex items-center px-8 lg:px-24 py-4 z-10 bg-base-200 shadow-sm'>
        <NavLink to="/"><h3>World Cuisines</h3></NavLink>
        <div className="lg:flex ml-auto gap-1 hidden">
            <NavLink className="btn btn-sm btn-ghost btn-active w-24 " to="/">Home</NavLink>
            <NavLink className="btn btn-sm btn-ghost w-" to="/cuisines">Cuisines</NavLink>
            <NavLink className="btn btn-sm btn-ghost" to="/categories">Categories</NavLink>
        </div>  
        <div className="dropdown dropdown-end ml-auto lg:hidden block">
          <label tabIndex="0" className="btn btn-sm btn-ghost btn-active">Menu</label>
          <div tabIndex="0" className="dropdown-content menu shadow bg-base-300 rounded-box w-36 p-2 gap-2 mt-1">
            <NavLink className="btn btn-sm btn-ghost" to="/">Home</NavLink>
            <NavLink className="btn btn-sm btn-ghost" to="/cuisines">Cuisines</NavLink>
            <NavLink className="btn btn-sm btn-ghost" to="/categories">Categories</NavLink>
          </div>
        </div>
    
    </nav>
  )
}

export default Nav
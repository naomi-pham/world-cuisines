import React from 'react'
import Home from './Home'
import Categories from './Categories'
import Cuisines from './Cuisines'
import Search from './Search'
import Recipe from './Recipe'

import {Routes, Route} from "react-router-dom"

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:category' element={<Categories />} />
        <Route path='/cuisines' element={<Cuisines />} />
        <Route path='/cuisines/:type' element={<Cuisines />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='/recipe/:name' element={<Recipe />} />
        <Route path='/search/*' element={<Search />} />
    </Routes>
  )
}

export default Pages
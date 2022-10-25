import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Slide from '../Slide/Slide'
import SelectCard from '../Card/SelectCard'


const CategoryOptions = () => {

  const [categories, setCategories]  = useState([])

  useEffect(() => {
    getCategories()
  }, [])  

  function getCategories() {
    const check = localStorage.getItem("categories")
    if (check) {
      setCategories(JSON.parse(check))
    } else {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("categories", JSON.stringify(data.categories.filter(category => category.strCategory !== "Miscellaneous")))
          setCategories(data.categories.filter(category => category.strCategory !== "Miscellaneous"))
        })
    }
  }

  return (
      <Slide>
        {categories.map(category => {
            return (
              <NavLink key={category.idCategory}  to={`/categories/${category.strCategory}`}>
                <SelectCard>
                    <img  src={category.strCategoryThumb}  className='rounded-full'/>
                    <p className="sm:text-lg text-sm font-bold">{category.strCategory}</p> 
                </SelectCard>
              </NavLink>
        )})}
      </Slide>
  )
}

export default CategoryOptions
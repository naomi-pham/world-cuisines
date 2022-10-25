import React, {useState, useEffect} from 'react'
import SectionTitle from '../Typography/SectionTitle'

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
    <Wrapper>
      <h3>Category info</h3>
      <div>
        {categories.map(category => {
            return (
              <Card 
                key={category.idCategory} 
                id={category.idCategory}>
                  <h4 className='card-title'>{category.strCategory}</h4>
                  <img src={category.strCategoryThumb} width="100px" />
                  <p>{category.strCategoryDescription.split(" ").splice(0).join(" ")}</p>
                  <div className='flex justify-end'>
                    <button className='btn btn-primary'>Find recipes</button>
                  </div>
              </Card>
        )})}
      </div>
    </Wrapper>
  )
}

const Wrapper = ({children}) => {
  return (
    <div className='mx-auto text-left'>
      {children}
    </div>
  )
}

const Card = ({children}) => {
  return (
    <div className='flex flex-col gap-2 rounded-3xl p-8 my-8 bg-neutral'>
      {children}
    </div>
  )
}

export default CategoryOptions
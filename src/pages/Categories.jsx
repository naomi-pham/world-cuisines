import React, {useState, useEffect} from 'react'
import CategoryInfo from '../components/Categories/CategoryInfo'
import CategoryOptions from '../components/Categories/CategoryOptions'
import { useParams } from 'react-router-dom'
import Wrapper from '../components/Wrapper/Wrapper'
import SectionTitle from '../components/Typography/SectionTitle'
import RecipesContainer from '../components/Wrapper/RecipesContainer'
import PreviewCard from '../components/Card/PreviewCard'


const Categories = () => {

  const [categoryRecipes, setCategoryRecipes] = useState([])
  let params = useParams()

  useEffect(() => {

    console.log(params.category)
    getCategoryRecipes(params.category)

  }, [params.category])

  function getCategoryRecipes(name) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then(res => res.json())
      .then(data => setCategoryRecipes(data.meals))

  }

  return (
    <Wrapper>
      <SectionTitle>
          Categories
      </SectionTitle>
      <CategoryOptions />
      <RecipesContainer>   
          {categoryRecipes && categoryRecipes.map(recipe => {
            return (
              <PreviewCard key={recipe.idMeal} recipe={recipe} />
            )
          })}
      </RecipesContainer>
    </Wrapper>
  )
}

export default Categories


// <CategoryInfo />

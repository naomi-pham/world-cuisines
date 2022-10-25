import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Regions from '../components/Cuisines/Regions'
import Wrapper from '../components/Wrapper/Wrapper'
import RecipesContainer from '../components/Wrapper/RecipesContainer'
import PreviewCard from '../components/Card/PreviewCard'
import SectionTitle from '../components/Typography/SectionTitle'


const Cuisines = () => {

  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  function getCuisine(name) {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
        .then(res => res.json())
        .then(data => {
          setCuisine(data.meals)
        })
  }

  return (
    <Wrapper>
      <SectionTitle>
          Select a cuisine
      </SectionTitle>
      <Regions />
      <RecipesContainer>   
          {cuisine && cuisine.map(recipe => {
            return (
              <PreviewCard key={recipe.idMeal} recipe={recipe} />
            )
          })}
      </RecipesContainer>
    </Wrapper>
  )
}

export default Cuisines
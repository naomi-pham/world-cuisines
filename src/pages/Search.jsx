import React from 'react'
import SearchInput from '../components/Search/SearchInput'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipesContainer from '../components/Wrapper/RecipesContainer'
import PreviewCard from '../components/Card/PreviewCard'
import Wrapper from '../components/Wrapper/Wrapper'

const Search = () => {

  let params = useParams()

  const [searchedItem, setSearchedItem] = useState([])

  useEffect(() => {
    searchItem(params.search)
  }, [params.search])

  function searchItem(input) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then(res => res.json())
      .then(data => {
        setSearchedItem(data.meals)
      })
  }



  return (
    <Wrapper>
      <SearchInput />
      <RecipesContainer>
        {searchedItem && searchedItem.map(recipe => {
          return (
            <PreviewCard key={recipe.idMeal} recipe={recipe} /> 
          )
        })}
      </RecipesContainer>
    </Wrapper>

  )
}

// strMeasure1, strIngredient1, strCategory, strArea
// strSource, strYoutube

export default Search
import React from 'react'
import { Link } from 'react-router-dom'

const PreviewCard = ({recipe}) => {


  return (

    <div className='bg-neutral rounded-3xl transition duration-300 ease-in hover:scale-110' key={recipe.idMeal}>
        <img className='rounded-tl-3xl rounded-tr-3xl' src={recipe.strMealThumb} />
        <div className='card-body gap-6'>
        <h2 className='card-title'>{recipe.strMeal}</h2>
        <Link className='btn btn-primary' to={"/recipe/" + recipe.idMeal}>Go to recipe</Link>
        </div>
    </div>
  )
}

export default PreviewCard
import React from 'react'

const RecipeCard = ({children}) => {
  return (
    <div className='lg:w-3/4 bg-neutral mx-auto rounded-2xl my-8'>
        {children}
    </div>
  )
}

export default RecipeCard
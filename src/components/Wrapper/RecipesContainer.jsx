import React from 'react'

const RecipesContainer = ({children}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-10'>   
        {children}
      </div>
  )
}

export default RecipesContainer
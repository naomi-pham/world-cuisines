import React from 'react'

const SelectCard = ({children}) => {
    return (
      <div className='card bg-base-200 border border-primary items-center w-32 gap-2 hover:bg-primary'
      >
        {children}
      </div>
    )
  }

export default SelectCard
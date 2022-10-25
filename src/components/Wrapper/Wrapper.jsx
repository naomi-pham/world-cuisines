import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='text-left mx-auto flex flex-col gap-8'>
      {children}
    </div>
  )
}

export default Wrapper
import React from 'react'

const Slide = ({children}) => {
return (
    <div className='flex gap-4 overflow-x-auto sm:min-w-full max-w-[300px]'>
        {children}
    </div>
)

}

export default Slide
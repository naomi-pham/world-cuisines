import React from 'react'

function Collapse({children, title}) {
  return (
    <div className="collapse collapse-arrow px-4 first:rounded-b-none last:border-t border-primary-focus">
        <input type="checkbox" />
        <div className="collapse-title">
            <h3>{title}</h3>
        </div>
        <div className="collapse-content">
            <div className='prose prose-lg'>
                {children}
            </div>
        </div>
    </div>
    
  )
}

export default Collapse
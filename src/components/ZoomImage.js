import React from 'react'

function ZoomImage(props) {
  
  return (
    <div className=''>
         <h4 className='font-weight-bold mb-3'>Edit Greeting</h4>
        <img src="./BG.png" className="card-img-top w-100 mb-4" alt="greeting-img" />
         {props.children}
    </div>
  )
}

export default ZoomImage
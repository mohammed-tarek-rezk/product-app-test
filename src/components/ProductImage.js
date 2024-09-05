import React from 'react'

function ProductImage({src}) {
  return (
    <div className='w-full h-[200px] object-cover flex justify-center'>
      <img src={src} className=' object-cover h-full ' />
    </div>
  )
}

export default ProductImage
import React, { useCallback, useState } from 'react'

function Categories(props) {

  return (
        <div className='bg-blue-100 cursor-pointer px-4 py-2 rounded-2xl cat ' onClick={(e)=>{ document.querySelectorAll(".cat").forEach((el)=> el.style = `background-color:#DBEAFE`) ;e.target.style = `background-color: #1E3A8A; color: white`  ;props.setP(props.category === "All"? props.products :props.products.filter((el)=> el.category === props.category)) }}>{props.category}</div>
  )
}

export default Categories
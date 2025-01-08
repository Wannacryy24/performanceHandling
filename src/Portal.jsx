import React, { useState } from 'react'
import {createPortal} from 'react-dom'
const NewProtal = () => {
    return (
        <h1>This is Portal</h1>
    )    
}

export default function Portal() {
  const [isOPen , setIsOpen] = useState(false);

  const portalToggle = () => {
    setIsOpen((prev)=>!prev)
  }

  return (
    <>
        <button onClick={portalToggle}>
        {
          isOPen ? 'Close Portal' : 'Open Portal'
        }
      </button>
        {
          isOPen && createPortal(
            <NewProtal/>,
            document.body //isse pta chalega ki target Dom kya hai
          )
        }
    </>
  )
}

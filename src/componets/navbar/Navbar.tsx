import React from 'react'
import NavPart1 from "./NavPart1"
import NavPart2 from "./NavPart2"

function Navbar() {
  return (
    <div className='flex justify-between items-center py-2 px-5'>
      <NavPart1/>
      <NavPart2/>
    </div>
  )
}

export default Navbar
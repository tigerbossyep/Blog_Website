import React from 'react'
import Header1 from './Header1'
import { Outlet } from 'react-router-dom'

const Routelayout = () => {
  return (
    <div>
        <Header1/>
        <Outlet/>
    </div>

  )
}

export default Routelayout

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './Pages/Homepage'
import { ProductPage } from './Pages/ProductPage'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
    </Routes>
  )
}

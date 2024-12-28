import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import User from './Pages/User'
import ProductStatus from './Pages/ProductStatus'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/user">User</Link></li>
                  <li><Link to="/productStatus">Product Status</Link></li>
              </ul>
          </nav>   

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/user' element={<User/>} />
            <Route path='/productStatus' element={<ProductStatus/>} />
          </Routes>     
      
      
      </BrowserRouter>
    </div>
  )
}

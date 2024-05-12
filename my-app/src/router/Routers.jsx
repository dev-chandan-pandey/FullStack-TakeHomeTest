import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { SearchResualtList } from '../pages/SearchResualtList';
function Routers() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Navigate to ="/home"/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/tours' element={<Tours/>}></Route>
    <Route path='/tours:id' element={<TourDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/tours/search' element={<SearchResualtList/>}></Route>





    </Routes>
    </div>
  )
}

export default Routers
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Comments from './components/Comments'
import Navbar from './components/Navbar'
import PostDetails from './components/PostDetails'
import Posts from './components/Posts'
import UserDetails from './components/UserDetails'
import Users from './components/Users'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route exact path='/' element={<Users/>}/>
                <Route path='/user/:id' element={<UserDetails/>}/>
                <Route path='/post' element={<Posts/>}/>
                <Route path='/:id' element={<PostDetails/>}/>
                <Route path='/comment' element={<Comments/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App
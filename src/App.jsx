import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './Post'

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path='/posts' element={<Post />} />
      <Route path='/profile'/>
      <Route path='/login'/>
      <Route path='/register'/>
    </Routes>
    </Router>
  )
}

export default App

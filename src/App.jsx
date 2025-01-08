import React, { Suspense } from 'react';
import { Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
// import About from "./About"

function App() {
  const Home = () => <h1>HOME</h1>
  const ContactUs = () => <h1>Contact us</h1>


  const About = React.lazy(()=> import('./About'));


  return (
    <>
    <Router>
      {
        <div>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </div>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={
          <Suspense fallback={<div>Loading....</div>}>
            <About/>
          </Suspense>
          }/>
        <Route path='/Contact' element={<ContactUs/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

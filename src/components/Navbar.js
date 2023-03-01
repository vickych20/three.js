import React from 'react'
import '../App.css';
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className="container1">
              <div className='logo'>
                  <h1>vicky chaudhary</h1>
                  <p>Home</p>
                  <p>Studio</p>
                  <p>Works</p>
                  <p>Contact</p>

              </div>
              <div className='rights'>
                  <AiOutlineSearch  className='icons'/>
                  <p>Hire Now</p>
              </div>
          
              
          </div>
      </div>
  )
}

export default Navbar
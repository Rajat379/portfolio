import React, {useState} from 'react'
import './navbar.css'

export const Navbar = () => {

  const [toggle, settoggle] = useState(false);
  
  const togglefunc = () => {
      settoggle(!toggle);
  }

  return (
    <div className='container'>
        <div className='name'>
            RAJAT
        </div>

        <div className='tabs'>
            <ul className='cols'>
                <li className='navLinks'>Home</li>
                <li className='navLinks'>About</li>
                <li className='navLinks'>Work</li>
                <li className='navLinks'>Projects</li>
            </ul>
        </div>

        <div className='burger' onClick={togglefunc}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </div>
  )
}

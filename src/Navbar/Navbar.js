import React, {useState} from 'react'
import './navbar.css'

export const Navbar = () => {

  const [toggle, settoggle] = useState(false);
  
  const togglefunc = () => {
      settoggle(!toggle);
  }

  console.log(toggle);
  return (
    <div className='container'>
        <div className='name'>
            RAJAT
        </div>

        <div className={toggle? 'tabs active' : 'tabs nonactive'}>
            <ul className='cols'>
                <li className='navLinks'>Home</li>
                <li className='navLinks'>About</li>
                <li className='navLinks'>Work</li>
                <li className='navLinks'>Projects</li>
            </ul>
        </div>

        <div className='burger' onClick={togglefunc}>
            <div className={toggle?'line1 active' : 'line1 nonactive'}></div>
            <div className={toggle?'line2 active' : 'line2 nonactive'}></div>
            <div className={toggle?'line3 active' : 'line3 nonactive'}></div>
        </div>
    </div>
  )
}

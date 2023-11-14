import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link className='logo' to='/'>Email Templates</Link>
      <ul>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='builder'>Builder page</NavLink></li>
      </ul>
    </header>
  )
}

export default Header
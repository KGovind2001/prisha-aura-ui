import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4'>
      <div className='container'>
        <Link className='navbar-brand fw-bold' to='/'>
          Prisha Aura
        </Link>

        <ul className='navbar-nav ms-auto d-flex flex-row gap-3'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/about'>About</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/gallery'>Gallery</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/shop'>Shop</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
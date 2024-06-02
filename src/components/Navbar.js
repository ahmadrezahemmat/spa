import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar(){
    return(
       <nav>
          <ul>
              <li><NavLink to='/' >Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
          </ul>
       </nav>
    )
}
export default Navbar
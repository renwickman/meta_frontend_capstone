import Logo from '../icons_assets/Logo.svg'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
       <div className="navigation">
           <img width="400px" src={Logo} alt="logo" />

           <nav className="nav_links">
            <ul>
                    <Link to="/">
                        <li>
                        <a href="#home">Home</a>
                        </li>
                    </Link>
                        <li>
                        <a href="#about">About</a>
                        </li>
                        <li>
                        <a href="#menu">Menu</a>
                        </li>
                    <Link to="/booking">
                        <li>
                        <a href="#reservations">Reservations</a>
                        </li>
                    </Link>
                    <li>
                    <a href="#login">Login</a>
                    </li>
               </ul>
           </nav>
       </div>
    )
   }

export default Nav;
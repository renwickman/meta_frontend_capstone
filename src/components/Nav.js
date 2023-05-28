import Logo from '../icons_assets/Logo.svg'

const Nav = () => {
    return (
       <div className="">
           <img src={Logo} alt="logo" />
           <h2>Little Lemon</h2>
           <nav>
           <ul>
               <li>
                    <a href="#home">Home</a>
                </li>
               <li>
                    <a href="#about">About</a>
                </li>
               <li>
                    <a href="#menu">Menu</a>
                </li>
               <li>
                    <a href="#reservations">Reservations</a>
                </li>
               <li>
                    <a href="#reservations">Reservations</a>
               </li>
               <li><a href="#login">Login</a>
               </li>
           </ul>
           </nav>
       </div>
    )
   }

export default Nav;
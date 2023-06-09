import Logo2 from '../icons_assets/Logo2.svg'
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
    <footer>
    <div className="footer_logo">
        <img width="300px" src={Logo2} alt="logo" />

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
                <a href="#order-online">Order Online</a>
            </li>
            <li>
                <a href="#login">Login</a>
            </li>
        </ul>

        <div>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>

        <div>
            <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#youtube">YouTube</a></li>
            </ul>
            </div>
        </div>

    </footer>
 )
}

export default Footer;
import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
    
    
    
    return (
    <header>
        <nav className="nav-bar">
            <p className='logo'>Super Shopping </p>
            <ul className='nav-bar-items'>
                <Link to="/">
                <li>Inicio</li>
                </Link>
                <Link to="/categoria/computadora">
                <li>Computadora</li>
                </Link>
                <Link to="/categoria/celular">
                <li>Celular</li>
                </Link>
            </ul>
            <CartWidget/>
        </nav>
    </header>
    );
};

export default Navbar;
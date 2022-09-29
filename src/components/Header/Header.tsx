import './Header.scss';
import { Link } from 'react-router-dom';
import poqLogo from '../../assets/logo/poq-logo.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__layer">
                <Link to="/">
                    <img
                        className="header__logo-img"
                        src={poqLogo}
                        alt="poq logo"
                    />
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <Link to="/">
                            <li className="nav__list-item">Home</li>
                        </Link>
                        <Link to="/products">
                            <li className="nav__list-item">Products</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

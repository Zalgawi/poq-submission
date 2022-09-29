import { Link } from 'react-router-dom';
import basketIcon from '../../assets/icons/basket.svg';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

const Home = () => {
    return (
        <section className="home">
            <h1 className="home__title">Welcome to Zayd's E-Commerce Store!</h1>
            <img className="home__img" src={basketIcon} alt="shopping basket" />
            <p className="home__text">
                To see the range of products available, please click the button
                below
            </p>
            <Link to="/products">
                <button className="home__btn">Go shopping!</button>
            </Link>
            <Footer />
        </section>
    );
};

export default Home;

import './Products.scss';

export const Products = () => {

    return (
        <section className="products">
            <h1 className="products__title">Products</h1>
            <h2 className="products__description">
                Press the checkboxes to select a range of cards to be removed{' '}
            </h2>
            <ul className="products__list">
                {/* TODO: Map through card components  */}
            </ul>
        </section>
    );
};

export default Products;

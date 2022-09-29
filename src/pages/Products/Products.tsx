<<<<<<< Updated upstream
import './Products.scss';

export const Products = () => {
=======
import { Product } from '../../App';
import Card from '../../components/Card/Card';
import './Products.scss';

export type ProductsProps = {
    removeProduct: (prodId: number) => void;
    deleteProducts: Array<any>;
    onDeleteProducts: () => void;
    onDeleteProductsChange: (productId: number) => void;
    productsData: Product[];
};

export const Products = (props: ProductsProps) => {
    const {
        productsData,
        deleteProducts,
        onDeleteProducts,
        onDeleteProductsChange
    } = props;

    const handleOnDeleteProducts = () => {
        onDeleteProducts && onDeleteProducts();
    };

    const removeSelectedProducts = (id: number) => {
        onDeleteProductsChange && onDeleteProductsChange(id);
    };
>>>>>>> Stashed changes

    return (
        <section className="products">
            <h1 className="products__title">Products</h1>
            <h2 className="products__description">
                Press the checkboxes to select a range of cards to be removed{' '}
            </h2>
<<<<<<< Updated upstream
            <ul className="products__list">
                {/* TODO: Map through card components  */}
=======
            <button
                className={
                    deleteProducts.length === 0
                        ? 'remove-button inverted invisible'
                        : 'remove-button inverted'
                }
                onClick={handleOnDeleteProducts}
            >
                Delete Selections
            </button>
            <ul className="products__list">
                {productsData.map((item: any) => (
                    <Card
                        key={item.productId}
                        item={item}
                        removeProduct={props.removeProduct}
                        deleteProducts={deleteProducts}
                        onDeleteProductsChange={removeSelectedProducts}
                    />
                ))}
>>>>>>> Stashed changes
            </ul>
        </section>
    );
};

export default Products;

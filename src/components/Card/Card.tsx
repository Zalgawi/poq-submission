import { Product } from '../../App';

import './Card.scss';

const Card = ({
    item,
    removeProduct,
    onDeleteProductsChange
}: {
    item: Product;
    removeProduct: (prodId: number) => void;
    deleteProducts: Array<any>;
    onDeleteProductsChange: (productId: number) => void;
}) => {
    const {
        imageUrl,
        name,
        price,
        promotionBadge,
        priceWas,
        available,
        quantity,
        productId,
        lowOnStock
    } = item;

    const handleOnChange = (item: Product) => {
        onDeleteProductsChange && onDeleteProductsChange(item.productId);
    };

    return available === 'TRUE' && quantity > 0 ? (
        <li className="card" key={productId}>
            <input
                type="checkbox"
                id={`custom-checkbox-${productId}`}
                value={productId}
                style={{
                    position: 'absolute',
                    marginRight: '20em',
                    marginTop: '0.8em',
                    zIndex: '1',
                    width: '1.5em',
                    height: '1.5em'
                }}
                onChange={() => handleOnChange(item)}
            />
            {promotionBadge ? (
                <div className="card-ribbon ribbon ribbon-top-left">
                    <span>{promotionBadge}</span>
                </div>
            ) : null}
            <div
                className="card-stock"
                style={
                    quantity < 5 && lowOnStock
                        ? { backgroundColor: 'red' }
                        : { backgroundColor: 'green' }
                }
            >
                {quantity === 0 ? 'Out of stock' : `${quantity} left in stock`}
            </div>
            <div className="card-body">
                <div className="card-body-image">
                    <img
                        className="card-body-image__img"
                        src={!imageUrl ? '' : imageUrl}
                        alt={name}
                    />
                </div>
            </div>
            <div className="card-footer">
                <div className="card-footer__title">{name}</div>
                <div className="card-footer-price">
                    <div className="card-footer-price__price">£{price}</div>
                    <div className="card-footer-price__priceWas">
                        £{priceWas}
                    </div>
                </div>
                <button
                    onClick={() => removeProduct(productId)}
                    className="cart-button inverted"
                >
                    Remove Listing
                </button>
            </div>
        </li>
    ) : null;
};

export default Card;

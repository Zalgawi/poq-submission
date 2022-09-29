import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Header from './components/Header/Header';
import { useCallback, useEffect, useState } from 'react';
import { handleError } from './utils/utils';
import { API_ENDPOINT } from './api/api';

export interface Product {
    item: Product;
    key: string;
    productId: number;
    imageUrl: string;
    name: string;
    price: number;
    promotionBadge: string;
    lowOnStock: string;
    priceWas: number;
    available: string;
    quantity: number;
    shouldDelete: boolean;
}

function App() {
    const [productsData, setProductsData] = useState<any>([]);
    const [deleteProducts, setDeleteProducts] = useState<Array<any>>([]);

    const removeProduct = (productId: number) => {
        const products: { productId: number }[] = productsData;

        const indexOfObject = products.findIndex((object) => {
            return object.productId === productId;
        });

        if (indexOfObject !== -1) {
            products.splice(indexOfObject, 1);
        }

        setProductsData([...productsData]);
    };

    const handleOnDeleteProducts = useCallback(() => {
        setProductsData((products: Array<Product>) =>
            products.filter(
                (product: Product) =>
                    !deleteProducts.includes(product.productId)
            )
        );
    }, [deleteProducts]);

    const onDeleteProductsChange = useCallback((id: number) => {
        setDeleteProducts((deleteProducts: Array<any>) => [
            ...deleteProducts,
            id
        ]);
    }, []);

    const getProducts = async () => {
        fetch(`${API_ENDPOINT}/`, {
            method: 'GET'
        })
            .then(handleError)
            .then((response) => response.json())
            .then((productsData) => {
                setProductsData(productsData);
            })
            .catch((error) => console.error('GET web data error:', error));
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <BrowserRouter>
                <main className="main">
                    <section className="page-container">
                        <Header />
                        <div className="page-container__content-wrap">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/products"
                                    element={
                                        <Products
                                            productsData={productsData}
                                            removeProduct={removeProduct}
                                            deleteProducts={deleteProducts}
                                            onDeleteProducts={
                                                handleOnDeleteProducts
                                            }
                                            onDeleteProductsChange={
                                                onDeleteProductsChange
                                            }
                                        />
                                    }
                                />
                            </Routes>
                        </div>
                    </section>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;

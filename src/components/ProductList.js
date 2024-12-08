import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch product details from API and pass to product card to build the card 
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                setLoading(false);

            } catch (error) {
                console.log(error)

            }
        }
        fetchProducts()
    }, []);



    return (
        <>
            <div className="home-container">
                {/* loading image */}
                {loading ? (
                    <>
                        <img className="home-img" src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png" alt="loading" />
                        <p className='text-xl'>Loading the data........</p>
                    </>

                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-3 md:gap-5 lg:gap-6">
                        {/* send product id,details and addToCart*/}
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                )}
            </div >
        </>
    );
};

export default ProductList;
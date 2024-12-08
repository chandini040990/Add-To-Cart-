import React from 'react';


const ProductCard = ({ product, addToCart }) => {

    return (
        <div className="products-card">
            {/* Build product card from fetched product details in product list */}
            <img className="products-img" src={product.image} alt={product.id} />
            <h1 className="products-title">{product.title}</h1><br />
            <p className='text-lg text-green-700'>${product.price}</p><br />
            <p className="text-sm">{product.description}</p><br />
            <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard;
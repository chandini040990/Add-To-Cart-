import { useNavigate } from "react-router-dom";
import React from 'react';

function UserCart({
    cart,
    removeFromCart,
    totalAmount,
    setCart,
    discountAmt
}) {


    const navigate = useNavigate();
    const backToprev = () => {
        navigate(-1);
    }
    return (
        <div className={`cart ${cart.length > 0 ? 'active' : ''}`}>
            <h2 className="font-bold">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">Your Cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.product.id} className="cart-item">
                                <div>
                                    <div className="item-info">
                                        <div className="item-image">
                                            <img src={item.product.image}
                                                alt={item.product.name} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.product.name}</h3>
                                            <p>{item.product.title}</p>
                                            <p>Price: ₹{item.product.price}</p>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="item-actions">
                                            <button
                                                className="remove-button"
                                                onClick={() =>
                                                    removeFromCart(item.product)}>
                                                Remove
                                            </button>
                                            <div className="quantity">
                                                <button style={{ margin: "1%" }}
                                                    onClick={(e) => {
                                                        setCart((prevCart) => {
                                                            const updatedCart = prevCart.map(
                                                                (prevItem) =>
                                                                    prevItem.product.id === item.product.id
                                                                        ? {
                                                                            ...prevItem, quantity:
                                                                                item.quantity + 1
                                                                        }
                                                                        : prevItem
                                                            );
                                                            return updatedCart;
                                                        })
                                                    }}>+</button>
                                                <p className='quant'>{item.quantity} </p>
                                                <button
                                                    onClick={(e) => {
                                                        setCart((prevCart) => {
                                                            const updatedCart = prevCart.map(
                                                                (prevItem) =>
                                                                    prevItem.product.id === item.product.id
                                                                        ? {
                                                                            ...prevItem, quantity:
                                                                                Math.max(item.quantity - 1, 0)
                                                                        }
                                                                        : prevItem
                                                            );
                                                            return updatedCart;
                                                        })
                                                    }}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <h1 className="font-bold underline text-gray-600">Price Summary:</h1>
                        <p>Total Amount:₹{totalAmount}</p>
                        Discount 10% applied:<p className="line-through">₹{totalAmount}</p>
                        <p className="font-bold text-green-900">Final Price: ₹{discountAmt}</p>
                    </div>
                    <button className="bg-gray-500 text-white py-1 px-3 mr-10 rounded-lg"
                        onClick={backToprev}>Back</button>
                    {/* close the cartmodal */}
                    <button className="bg-gray-500 text-white py-1 px-3 rounded-lg"
                        onClick={backToprev}>Close</button>


                </div>

            )}
        </div>
    );
}

export default UserCart;
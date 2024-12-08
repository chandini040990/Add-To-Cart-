
import React, { useMemo, useState } from 'react';
import './App.css';
import UserCart from './components/UserCart';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    const [cart, setCart] = useState([]);

    const addToCart = (current) => {
        const alreadyCart = cart
            .find(item => item.product.id === current.id);
        if (alreadyCart) {
            const latestCartUpdate = cart.map(item =>
                item.product.id === current.id ? {
                    ...item, quantity: item.quantity + 1
                }
                    : item
            );
            setCart(latestCartUpdate);
        } else {
            setCart([...cart, { product: current, quantity: 1 }]);
        }
    };

    const removeFromCart = (current) => {
        const updatedCart = cart
            .filter(item => item.product.id !== current.id);
        setCart(updatedCart);
    };

    const totalAmount = useMemo(() => {
        return cart
            .reduce((total, item) =>
                total + item.product.price * item.quantity, 0);
    }, [cart]);

    const discountAmt = (totalAmount * 10) / 100;

    return (
        <>

            <Router>
                <div className="App">
                    <header>
                        <Navbar cartCount={cart.length} />
                    </header>

                    <main className="App-main">
                        <Routes>
                            <Route path="/" element={<ProductList
                                cart={cart}
                                addToCart={addToCart}
                            />} />

                            <Route path="/UserCart" element={<UserCart
                                cart={cart}
                                removeFromCart={removeFromCart}
                                totalAmount={parseFloat(totalAmount.toFixed(2))}
                                setCart={setCart}
                                discountAmt={parseFloat(discountAmt.toFixed(2))}
                            />} />
                        </Routes>
                    </main>
                    
                </div>
            </Router>
        </>
    );
}

export default App;

import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { CartContext } from './Cart';

const ContextCart = () => {
    const { state:{items: products, totalAmount, totalItem}} = useContext(CartContext);
    return <>
        <header>
            <div className="continue-shopping">
                <img src="./images/arrow.png" className="arrow-icon" alt="go-back" />
                <h3>Continue Shopping</h3>
            </div>
            <div className="cart-icon">
                <img src="./images/cart.png" alt="cart" />
                <p>{totalItem}</p>
            </div>
        </header>
        <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">you have <span className="total-items-count">7</span> item in your shopping cart</p>
            <div className="cart-items">
                <div className="cart-items-container">
                    <Scrollbars>
                        {
                            products.map((product) => {
                                return <Items item={product} key={product.id} />
                            })
                        }
                    </Scrollbars>
                </div>
            </div>
            <div className="card-total">
                <h3>Total Amount : <span>Rs. {totalAmount}</span></h3>
                <button>Checkout</button>
            </div>
        </section>
    </>
}
export default ContextCart;
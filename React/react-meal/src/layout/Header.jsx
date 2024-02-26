import '../css/Header.css';
const Header = ()=>{
    return(<>
        <header>
            <h1>ReactMeal</h1>
            <button><img src="./icons/cart.svg" alt="Cart" /> <span>Your Cart</span> <span>6</span></button>
        </header>
        <div className='header-banner'>
            <img src="./icons/meals.jpg" alt="" />
            <div className='summary-car'>
                <h1>Delicious Food, Delivered To You</h1>
                <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
        </div>
    </>)
}

export default Header;
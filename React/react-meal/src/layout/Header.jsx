import '../css/Header.css';
import ModalPopup from '../view-components/ModalPopup';
import { useState } from 'react';

const Header = ()=>{
    const [showModal, setShowModal] = useState(false)
    return(<>
        <header>
            <h1>ReactMeal</h1>
            <button onClick={()=>setShowModal(true)}><img src="./icons/cart.svg" alt="Cart" /> <span>Your Cart</span> <span>6</span></button>
        </header>
        <ModalPopup show={showModal} close={() => setShowModal(false)}/>
        <div className='header-banner'>
            <img src="./icons/meals.jpg" alt="" />
            <div className='summary-card'>
                <h1>Delicious Food, Delivered To You</h1>
                <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
        </div>
    </>)
}

export default Header;
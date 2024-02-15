import React from "react";

const Home = () => {
  return (
    <>
      <div style={{ padding: "30px" }}>
        <div>
          <span className="item-count">1</span><img className='cart' src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart" />
        </div>
        <div className="card-wrapper">
          <span>
            <img
              src="https://www.oneplusservicecentre.com/assets/img/abt-img.png"
              alt=""
            />
          </span>
          <span>
            Price : <strong>$100</strong>
          </span>
          <button>Add to Card</button>
        </div>
      </div>
    </>
  );
};

export default Home;

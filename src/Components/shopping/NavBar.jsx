import {useSelector} from "react-redux";
import {NavLink} from "react-router";
import React from "react";

const NavBar = () => {
    const cartItems = useSelector( state => state.cart.items);
    const numberOfItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }
    return (
        <div className="navbar" style={styleObj}>
            <div className="tag">
                <div className="luxury">
                    <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                    <NavLink to="/e-plantShopping">
                        <div>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </div>
                    </NavLink>
                </div>

            </div>
            <div style={styleObjUl}>
                <div>
                    <NavLink
                        to="/e-plantShopping/shopping"
                    >
                        Plants
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/e-plantShopping/shopping/cart"
                        style={styleA}
                    >
                        <h1 className='cart'>
                            { (numberOfItems > 0) ? numberOfItems : '' }
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                <rect width="156" height="156" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                            </svg>
                        </h1>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
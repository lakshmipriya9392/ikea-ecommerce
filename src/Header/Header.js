import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    return (
        <nav className="header">
        <div className="header__right">
            <MenuIcon className="header__menu"/>
        </div>
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="https://www.ikea.com/nl/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg"
                    alt=""
                />
            </Link>
            
            <Link to="/products" className="header__pro">
                <h4 className="header__title">Products</h4>
            </Link>
            <Link to="/rooms" className="header__pro">
                <h4 className="header__title">Rooms</h4>
            </Link>
        <div className="header__search">
            <input 
                type="text" 
                className="header__searchInput"
                placeholder="What are you looking for?"    
            />
                <SearchIcon className="header__searchIcon" />
            {/* <CameraAltIcon className="header__cameraIcon" /> */}
            
        </div>

        <div className="header__nav">
           <Link to="/" className="header__link">
                <div className="header__option">
                    {/* <span>Hello there</span> */}
                    <LocalShippingIcon/>
                </div>
            </Link>

            <Link to="/login" className="header__link">
                <div  className="header__optionProfile">
                    <span>Hello,</span>
                    <PersonOutlineIcon/>
                    <span className="header__optionLineTwo"> </span>
                </div>
            </Link>

            {/* <Link to="/" className="header__link">
                <div className="header__option">
                  
                    <FavoriteBorderIcon/>
                </div>
            </Link> */}
            
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping basket icon*/}
                    <ShoppingBasketIcon/>
                    {/* number of iitems in the basket */}
                    <span className="header__optionLineTwo header__basektCount">
                        
                    </span>
                </div>
            </Link>
            
            
            
        </div>
    </nav>
    )
}

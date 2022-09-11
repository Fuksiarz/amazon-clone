import React from 'react';
import './Header.css'
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './Firebase';

function Header() {

    const [{basket, user},dispatch] = useStateValue();
    const [usernow,setUsernow]=useState(auth.currentUser);
    const handleAuthentication = ()=>{
        if(!user){
            
            auth.signOut();
            auth.currentUser=null;
        }
          
    }
    
    return (
        <div className="header">
            <Link to="/">
                <img
                className="header__logo"
                src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
                alt="logo"

            />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                    />
                <SearchIcon className="header__searchIcon"/>

            </div>

            <div    
                    className="nav">
                <Link   to={!auth.currentUser&&"/login"}onClick={handleAuthentication}
                        >
                <div    
                        className='header__option'>
                    <span className='header__optionLineOne'>
                        hello {auth.currentUser?.email}
                    </span>
                    <span className='header__optionLineTwo'>
                        {auth.currentUser?'Sign Out':'Sign In'}
                    </span>
                </div>
                </Link>
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                       Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                        <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div>
                   <div className="header__optionBasket">
                       <ShoppingBasketIcon/>
                       <span className="header__optionLineTwo"><span className="header__basketCount" >
                        {basket?.length}
                        </span>
                    </span>
                   </div>
                </div>
                </Link>
            </div>
        </div>

    );
}

export default Header;

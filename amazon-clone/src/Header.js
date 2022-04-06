import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
                alt="logo"

            />


            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                    />

            </div>
            <div className="nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        returns
                    </span>
                    <span className='header__optionLineTwo'>
                        orders
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
            </div>
        </div>

    );
}

export default Header;

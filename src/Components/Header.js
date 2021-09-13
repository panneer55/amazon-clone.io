import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Store/StateProvider';
import { auth } from './helper/firebase';

const Header = () => {
    const[{basket,user}] = useStateValue();
    const handleAuthenticate=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/home">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon_logo" className="header_logo"/>
            </Link>

            <div className="header_search">
                <input type="text" className="header_inputSearch" />
                <SearchIcon className= "header_search_icon"/>
            </div>
            <div className="header_nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuthenticate} className="header_option">
                    <span className="header_lineOne">
                        {user?.email || 'Hello,Guest'}
                    </span>
                    <span className="header_lineTwo">
                        {user? "SignOut": "SignIn"}
                    </span>
                </div>
            </Link>
                <div className="header_option">
                    <span className="header_lineOne">
                        Return
                    </span>
                    <Link to="/orders">
                    <span className="header_lineTwo">
                         &#38; orders
                    </span>
                    </Link>
                    
                </div>
                <div className="header_option">
                    <span className="header_lineOne">
                        Your
                    </span>
                    <span className="header_lineTwo">
                        Prime
                    </span>
                </div>
            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_lineOne header_basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Header


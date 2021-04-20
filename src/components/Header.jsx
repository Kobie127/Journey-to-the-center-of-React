import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import {auth} from '../firebase/firebase.utils';
import {Link} from 'react-router-dom'



const Header = ({currentUser}) => (
    <div className= 'header'>
        <h1>
            <HighlightIcon />
            Note Keeper
        </h1>
        <div className = 'options'>
                <Link className='option' to='/'>
                    Home
                </Link>
                {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
    
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
);

export default Header;
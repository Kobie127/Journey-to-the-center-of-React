import React from 'react';
import SignIn from '../components/Sign-In.jsx';
import SignUp from '../components/Sign-Up.jsx';
import Header from '../components/Header.jsx';

const SignInAndSignOut = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignOut;
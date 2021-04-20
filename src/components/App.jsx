import React, { Component } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';


import HomePage from '../pages/homepage.jsx';
import SignInAndSignUpPage from '../pages/Sign-In-and-Sign-Out.jsx';
import{auth, createUserProfileDocument} from '../firebase/firebase.utils';
import Header from './Header.jsx';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });

      }else{
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Header currentUser = {this.state.currentUser}/>
            <Switch>
              <Route exact path ='/' component = {HomePage}/>
              <Route exact oath ='/signin' component = {SignInAndSignUpPage}/>
            </Switch>
        </BrowserRouter>
      </div>
        
    );
  }
 
}

export default App;

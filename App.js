import React, {useEffect, useReducer, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/routes/AppNavigator';
import SignIn from './src/components/screens/login_screens/SignIn';
import UserLogin from './src/components/screens/login_screens/UserLogin';

const App = () => {

    const [isSignedIn, setSignedIn] = useState(true)

    useEffect(()=>{

    },[isSignedIn])

  return (

      <NavigationContainer>
          {
              isSignedIn ? <AppNavigator/> : <SignIn isSignedIn={isSignedIn} setSignedIn={setSignedIn}/>
          }

      </NavigationContainer>
  )
};


export default App;

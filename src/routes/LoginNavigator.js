import React from 'react';
import SignUp from '../components/screens/login_screens/SignUp';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../components/screens/login_screens/SignIn';

const Stack = createStackNavigator()

function LoginNavigator(props) {
    return(
        <Stack.Navigator>
            <Stack.Screen name={"SignIn"} component={SignIn} />
            <Stack.Screen name={"SignUp"} component={SignUp}  />
        </Stack.Navigator>
    )
}

export default LoginNavigator

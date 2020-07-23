import React from 'react';
import GenreContainer from '../components/screens/genre_screens/GenreContainer';
import FormGenre from '../components/screens/genre_screens/FormGenre';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign'

const Tab = createBottomTabNavigator();


const GenreNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen
                name={"Genre"}
                component={GenreContainer}
                options={{
                    tabBarIcon: () => <Mci name="library-music" size={24} color={"#8785a2"}/>,
                    headerStyle :{
                        backgroundColor : '#8785a2'
                    }
                }}
            />
            <Tab.Screen
                name={"FormGenre"}
                component={FormGenre}
                options={{
                    tabBarIcon: () => <AntDesign name="form" size={24} color={"#8785a2"}/>,
                    headerStyle :{
                        backgroundColor : '#8785a2'
                    }
                }}/>
        </Tab.Navigator>
    )
}
export default GenreNavigator

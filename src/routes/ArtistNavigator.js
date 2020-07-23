import React from 'react';
import ArtistContainer from '../components/screens/artist_screens/ArtistContainer';
import FormArtist from '../components/screens/artist_screens/FormArtist';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Tab = createBottomTabNavigator();
const ArtistNavigator = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={"Artist"}
                component={ArtistContainer}
                options={{
                    headerStyle :{
                        backgroundColor : '#8785a2'
                    },
                    tabBarIcon: () => <Mci name="artist" size={24} color={"#8785a2"}/>
                }}/>
            <Tab.Screen name={"FormArtist"}
                          component={FormArtist}
                          options={{
                              headerStyle: {
                                  backgroundColor: '#8785a2'
                              },
                              tabBarIcon: () => <AntDesign name="form" size={24} color={"#8785a2"}/>
                          }}
            />
        </Tab.Navigator>
    )
}
export default ArtistNavigator

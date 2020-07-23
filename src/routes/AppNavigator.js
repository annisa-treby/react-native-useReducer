import React from 'react';
import HomeScreens from '../components/screens/home_screens/HomeScreens';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons'
import ExploreScreen from '../components/screens/home_screens/ExploreScreen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import AccountScreen from '../components/screens/home_screens/AccountScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GenreNavigator from './GenreNavigator';
import AlbumNavigator from './AlbumNavigator';
import ArtistNavigator from './ArtistNavigator';
import SongNavigator from './SongNavigator';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator =()=> {
    return(
        <Tab.Navigator>
            <Tab.Screen name={"Home"}
                        component={HomeScreens}
                        options={{tabBarIcon: () => <FontAwesome name="headphones" size={24} color={"#8785a2"}/>

                        }}/>
            <Tab.Screen name={"Explore"}
                        component={ExploreScreen}
                        options={{tabBarIcon: () => <FontAwesome name="wpexplorer" size={24} color={"#8785a2"}/>
                        }}/>

            <Tab.Screen name={"Library"}
                        component={AccountScreen}
                        options={{tabBarIcon: () => <Mci name="library-music" size={24} color={"#8785a2"}/>
                        }}/>
            <Tab.Screen name={"Account"}
                        component={AccountScreen}
                        options={{tabBarIcon: () => <Mci name="account-star" size={24} color={"#8785a2"}/>
                        }}/>
        </Tab.Navigator>
    )
}

export default function AppNavigator() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name={"Home"}
                           component={HomeTabNavigator}
                           options={{tabBarIcon: () => <Mci name="account-star" size={24} color={"#8785a2"}/>}}/>
            <Drawer.Screen name={"Genre"} component={GenreNavigator}/>
            <Drawer.Screen name={"Album"} component={AlbumNavigator}/>
            <Drawer.Screen name={"Artist"} component={ArtistNavigator}/>
            <Drawer.Screen name={"Song"} component={SongNavigator}/>
        </Drawer.Navigator>

    )
}


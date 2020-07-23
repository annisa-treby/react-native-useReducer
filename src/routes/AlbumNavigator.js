import React from 'react';
import AlbumContainer from '../components/screens/album_screens/AlbumContainer';
import FormAlbum from '../components/screens/album_screens/FormAlbum';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign'

const Tab = createBottomTabNavigator();

const AlbumNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen
                name={"Album"}
                component={AlbumContainer}
                options={{
                    tabBarIcon: () => <Mci name="library-music" size={24} color={"#8785a2"}/>,
                    headerStyle :{
                        backgroundColor : '#8785a2'
                    }
                }}
            />
            <Tab.Screen name={"FormAlbum"} component={FormAlbum}
                        options={{
                            tabBarIcon: () => <AntDesign name="form" size={24} color={"#8785a2"}/>,
                            headerStyle :{
                                backgroundColor : '#8785a2'
                            }
                        }}/>
        </Tab.Navigator>
    )
}

export default AlbumNavigator

import React from 'react';
import SongContainer from '../components/screens/song_screens/SongContainer';
import FormSong from '../components/screens/song_screens/FormSong';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const SongNavigator = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Song"}
                          component={SongContainer}
                          options={{
                              headerStyle: {
                                  backgroundColor: '#8785a2'
                              }
                          }}/>
            <Tab.Screen name={"FormSong"}
                          component={FormSong}
                          options={{
                              headerStyle: {
                                  backgroundColor: '#8785a2'
                              }
                          }}/>
        </Tab.Navigator>
    )
}

export default SongNavigator

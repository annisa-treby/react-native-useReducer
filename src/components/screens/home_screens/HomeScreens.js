import React from 'react';
import {ImageBackground, View, StyleSheet, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Zocial from 'react-native-vector-icons/dist/Zocial'

function HomeScreens() {
return(
    <View>
        <View style={{justifyContent: "center"}}>
        <Zocial name={"itunes"} size={100} style={{color : '#8785a2' }}/>
        </View>
        <View style={{backgroundColor : '#ffc7c7', height : 50, flexDirection:'row', justifyContent:'center', borderRadius:29}}>
            <Text style={{fontSize:40, fontFamily:'Roboto', color : '#8785a2', alignItems:'center'}}>iTune</Text>
        </View>

    </View>
)
}
const styles = StyleSheet.create({
    image :{
        flex : 1,
        resizeMode:"cover",
        justifyContent :"center",
    }
})

export default HomeScreens;

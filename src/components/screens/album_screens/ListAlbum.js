import React, {useState} from 'react';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import {deleteAlbum, postAlbum} from '../../services/AlbumServices';
import {Image, StyleSheet, ToastAndroid, View} from 'react-native';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';

function ListAlbum(props) {

    const {album, index, getData} =props
    const [disabledInput, setDisabledInput] = useState(true)

    const handleUpdate = (form) =>{
        postAlbum(form)
            .then((album)=>{
                props.navigation.navigate("FormAlbum")
            })
    }

    const handleDelete = (id) =>{
        deleteAlbum(id)
            .then((isSuccess)=>{
                if(isSuccess){
                    showToast("Album deleted")
                    getData();
                }
            })
    }

    const showToast =(message)=>{
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

return(

    <View style={styles.container} >
        <Image source={{uri:`http://10.10.12.205:8080/album/photo/${album.id}`}} style = {styles.image}/>
        <View style={styles.view}>
            <Text style={{justifyItems:"flex-start"}}>{index}</Text>
            <TextInput style={{backgroundColor :'#ffe2e2'}}>{album.title}</TextInput>
            <TextInput style={{backgroundColor :'#ffe2e2'}}>{album.discount}</TextInput>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            {
            disabledInput ? <Button onPress={()=> setDisabledInput(false)}> <FontAwesome name={"edit"} size={24}/> </Button> :
                <Button onPress={()=>handleUpdate()}><Feather name={"check-square"} size={24}/> </Button>
            }
            <Button onPress={()=> handleDelete(album.id)}> <Mci name={"delete-outline"} size={24}/> </Button>
            </View>
        </View>
    </View>
)
}
export default ListAlbum
const styles= StyleSheet.create({
    container :{
        flexDirection:'column',
        justifyContent:"center",
        backgroundColor :'#ffe2e2'
    },
    view :{
        flexDirection: 'row',
        alignContent:"center",
        justifyContent:"space-between",
        backgroundColor :'#ffe2e2'
    },
    card :{
        flex:1,
        flexDirection :'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor :'#ffe2e2'
    },
    input :{

        backgroundColor: '#ffe2e2'
    },
    image :{
        height: 50,
        resizeMode : 'center',
        margin:5
    }
})

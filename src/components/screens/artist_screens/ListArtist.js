import React, {useState} from 'react';
import {Image, StyleSheet, ToastAndroid, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteArtist} from '../../services/ArtistServices';

function ListArtist(props) {

    const {index, artist, getData} = props
    const [disabledInput, setDisabledInput] = useState(true)

    const handleUpdate = () =>{
        setDisabledInput(false)
    }

    const handleDelete = (id) =>{
        console.log(id);
        deleteArtist(id)
            .then((isSuccess)=>{
                if(isSuccess)
                    showToast("Artist deleted")
                    getData();
            })
    }

    const showToast = (message) =>{
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

return(
    <View style={styles.container}>
        <Image source={{uri:`http://10.10.12.205:8080/artist/photo/${artist.id}`}} style={styles.image}/>
        <View style={styles.view}>

            <TextInput style={{backgroundColor :'#ffe2e2'}}>{index}. {artist.name}</TextInput>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            {
                disabledInput ? <Button onPress={()=> setDisabledInput(false)}> <FontAwesome name={"edit"} size={24}/> </Button> :
                    <Button onPress={()=>handleUpdate()}><Feather name={"check-square"} size={24}/> </Button>
            }
            <Button onPress={()=> handleDelete(artist.id)}> <Mci name={"delete-outline"} size={24}/> </Button>
            </View>
        </View>
    </View>
)
}
export default ListArtist
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

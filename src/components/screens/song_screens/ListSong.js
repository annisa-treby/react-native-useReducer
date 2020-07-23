import React, {useEffect, useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {useForm} from 'react-hook-form'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteSong, putSong} from '../../services/SongService';

function ListSong(props) {

    const [disabledInput, setDisabledInput] = useState(true)
    const {song, index, getData} = props

    const {register, handleSubmit, setValue, watch} = useForm({defaultValues : {
        id : song.id,
        title : song.title,
        releaseYear : song.releaseYear,
        duration : song.duration,
        price : song.price
        }})

    useEffect(()=>{
        register('id')
        register('title')
        register('releaseYear')
        register('duration')
        register('price')
    }, [register])

    const showToast = (message) =>{
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

    const handleUpdate = (form) =>{
        putSong(form)
            .then((song)=>{
                setDisabledInput(true)
                showToast("Song updated")
            })
    }

    const handleDelete = (id) =>{
        deleteSong(id)
            .then((isSuccess)=>{
                if(isSuccess)
                    showToast("Song deleted")
                    getData()
            })
    }

    return (
        <View>
            <Text>{index}</Text>
            <TextInput disabled={disabledInput}>{song.title}</TextInput>
            {
                disabledInput ? <Button onPress={()=> setDisabledInput(false)}> <FontAwesome name={"edit"} size={24}/> </Button> :
                    <Button onPress={handleSubmit(handleUpdate)}><Feather name={"check-square"} size={24}/> </Button>
            }
            <Button onPress={()=> handleDelete(song.id)}> <Mci name={"delete-outline"} size={24}/> </Button>

        </View>
    )

}
export default ListSong

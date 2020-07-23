import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {useForm} from 'react-hook-form';
import {postSong} from '../../services/SongService';

function FormSong(props) {

    const {register, handleSubmit, setValue, errors} = useForm()

    useEffect(()=>{
        register('title')
        register('releaseYear')
        register('duration')
        register('price')
    }, [register])

    const onSubmit = (form) =>{
        postSong(form)
            .then((form)=>{
                props.navigation.goBack()
            })
    }

    return(
    <View>
                {errors.title && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
                <TextInput
                    mode={"outlined"}
                    label={"Title"}
                    onChangeText={(text)=>{
                        setValue('title', text)
                    }}
                />

                {errors.releaseYear && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
                <TextInput
                    mode={"outlined"}
                    label={"Release Year"}
                    onChangeText={(text)=>{
                        setValue('releaseYear', text)
                    }}
                />

                {errors.duration && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
                <TextInput
                    mode={"outlined"}
                    label={"Duration"}
                    onChangeText={(text)=>{
                        setValue('duration', text)
                    }}
                />

                {errors.price && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
                <TextInput
                    mode={"outlined"}
                    label={"Price"}
                    onChangeText={(text)=>{
                        setValue('price', text)
                    }}
                />

                <Button
                    onPress={handleSubmit(onSubmit)}
                ><FontAwesome name={"save"} size={25} /> Save </Button>
    </View>
)
}

export default FormSong

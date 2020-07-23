import React, {useReducer, useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {Image, ScrollView, View} from 'react-native';
import {FETCH_COMPLETE, HANDLE_INPUT_CHANGE, SET_LOADING} from '../../actions/AlbumActions';
import {ArtistReducer, initialState} from '../../reducers/ArtistReducer';
import {postArtist} from '../../services/ArtistServices';

function FormArtist() {
    const [state, dispatch]=useReducer(ArtistReducer, initialState)
    const {form} = state

    const handleInputChanges = (inputName, inputValue) => dispatch ({type:HANDLE_INPUT_CHANGE, payload:{inputName, inputValue}})

    const [photo, setPhoto] = useState(null)

    const onSubmit = (form, photo) =>{
        console.log('form onsubmit', form);
        console.log('photo onsubmit', photo);
        postArtist(form)
            .then((response)=>{
                console.log(response);
            })
    }

    const options ={
        selectedGender : [],
        options : [
            {gender : 'MALE'},
            {gender : 'FEMALE'}
        ]
    }

    const handleChoosePhoto = () =>{
        const options = {
            noData : true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if(response.uri) {

                setPhoto( response.uri)
            }
        })
    }

    return(
        <ScrollView>
            <View style={styles.header}>
                <Text style={{fontSize:30, fontFamily:'Roboto', alignItems:'center'}}>Create New Artist</Text>
            </View>
            <Card>
                    <TextInput
                        mode={"outlined"}
                        label={"Name"}
                        value={form.name}
                        style={styles.input}
                        onChangeText={(value)=>handleInputChanges('name', value)}
                    />
                    <TextInput
                        mode={"outlined"}
                        label={"Gender"}
                        value={form.gender}
                        style={styles.input}
                        onChangeText={(value)=>handleInputChanges('gender', value)}
                    />
                    <TextInput
                        mode={"outlined"}
                        label={"debutYear"}
                        value={form.debutYear}
                        onChangeText={(value)=>handleInputChanges('debutYear', value)}
                    />
                <TextInput
                    mode={"outlined"}
                    label={"biography"}
                    value={form.biography}
                    style={styles.input}
                    onChangeText={(value)=>handleInputChanges('biography', value)}
                />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:"white"}}>
                        {photo && (
                            <Image
                                source={{ uri: photo.uri }}
                                style={{ width: 100, height: 100 }}
                                onChangeText={(event)=>handleInputChanges('file', event.target.files[0])}
                            />
                        )}
                        <Button onPress={handleChoosePhoto}>choose photo</Button>
                    </View>
                    <Button mode={"contained"} onPress={()=>onSubmit()}>SAVE</Button>

            </Card>
        </ScrollView>
    )
}

export default FormArtist
const styles={
    header : {
        backgroundColor : '#8785a2',
        height : 50,
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:29,
        marginBottom : 10,
        marginTop : 10
    },
    input :{
        marginBottom: 10,
        marginTop: 10
    }
}

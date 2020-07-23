import React, {useReducer, useState} from 'react';
import {ScrollView, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker'
import {AlbumReducer, initialState} from '../../reducers/AlbumReducers';
import {postAlbum} from '../../services/AlbumServices';
import {HANDLE_INPUT_CHANGE} from '../../actions/AlbumActions';
import {Card, Text, TextInput, Button} from 'react-native-paper';

function FormAlbum() {

    const [state, dispatch] = useReducer(AlbumReducer, initialState)
    const {form} =state
    const [photo, setPhoto] = useState(null)

    const handleInputChanges = (inputName, inputValue) => dispatch ({type:HANDLE_INPUT_CHANGE, payload:{inputName, inputValue}})

   const handleChoosePhoto = () =>{
       const options = {
           noData : true,
       };
       ImagePicker.launchImageLibrary(options, response => {
           if(response.uri) {
               console.log('handlechoosefoto', response.uri);

               setPhoto( response.uri)
           }
       })
   }

   const onSubmit = (form, photo) =>{
        postAlbum(form, photo)
            .then((response)=>{
                console.log(response);
            })
   }

return(
    <ScrollView>
        <Card>
            <View style={styles.header}>
                <Text style={{fontSize:30, fontFamily:'Roboto', alignItems:'center'}}>Create New Album</Text>
            </View>
            <Card.Content>
                <TextInput
                mode={"outlined"}
                label={"title"}
                value={form.title}
                onChangeText={(value)=>handleInputChanges('title', value)}
                style={styles.input}
                />
                <TextInput
                    mode={"outlined"}
                    label={"description"}
                    value={form.description}
                    style={styles.input}
                    onChangeText={(value)=>handleInputChanges('description', value)}
                />
                <TextInput
                    mode={"outlined"}
                    label={"discount"}
                    value={form.discount}
                    style={styles.input}
                    onChangeText={(value)=>handleInputChanges('discount', value)}
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
            </Card.Content>
        </Card>
    </ScrollView>
)
}
export default FormAlbum
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

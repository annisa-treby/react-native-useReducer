import React, {useEffect, useState} from 'react';
import {ToastAndroid, View, StyleSheet} from 'react-native';
import {Card, Text} from 'native-base';
import {Button, TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteGenre, putGenre} from '../../services/GenreServices';
import {useForm} from 'react-hook-form';

function ListGenre(props) {

    const [disabledInput, setDisabledInput] = useState(true);
    const {getData, genre, index} = props

    const {register, setValue, handleSubmit, watch} = useForm({defaultValues : {
            id : genre.id,
            type : genre.type
        }})

    const values = watch();

    useEffect(()=>{
        register ('id')
        register ('type')
    }, [register])

    const handleDelete=(id)=>{
        deleteGenre(id)
            .then((isSuccess)=>{
                if(isSuccess) {
                    showToast("Genre deleted")
                    getData();
                }
            })
    }

    const showToast = (message) =>{
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

    const handleUpdate =(form)=>{
        putGenre(form)
            .then((form)=>{
                setDisabledInput(true)
            })
    }

    return(
    <View>

        <Card style={styles.card}>
            <Text>{index+1} </Text>
            <TextInput
                style={styles.input}
                disabled={disabledInput}
                value={values.type}
                onChangeText ={(text) => setValue('type', text)}
            />
            {
                disabledInput ?
                    <Button onPress={()=> setDisabledInput(false)}> <FontAwesome name={"edit"} size={24}/> </Button> :
                    <Button onPress={handleSubmit(handleUpdate)}><Feather name={"check-square"} size={24}/> </Button>
            }
            <Button onPress={()=> handleDelete(genre.id)}> <Mci name={"delete-outline"} size={24}/> </Button>
        </Card>
    </View>
)
}
export default ListGenre;

const styles= StyleSheet.create({
    card :{

        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor :'#ffe2e2',
        borderRadius : 15,
        height : 40
    },
    input :{
        width : '60%',
        backgroundColor: '#ffe2e2',
        height : 40
    }
})

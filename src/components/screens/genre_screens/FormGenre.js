import React, {useEffect, useReducer} from 'react';
import { View} from 'react-native';
import {Button, Card, Modal, Text, TextInput} from 'react-native-paper';
import {CardTitle} from 'react-native-paper/src/components/Card/CardTitle';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import {GenreReducer, initialState} from '../../reducers/GenreReducer';
import { SUBMIT_COMPLETE} from '../../actions/GenreActions';
import {postGenre, putGenre} from '../../services/GenreServices';
import {useForm} from 'react-hook-form';

function FormGenre(props) {

    const [state, dispatch] = useReducer(GenreReducer, initialState);
    const {register, setValue, handleSubmit, errors, reset} = useForm({
        defaultValues : {
            type : ''
        }
    })


    const submitComplete = (payload) => dispatch({type:SUBMIT_COMPLETE, payload})

    const onSubmit=(form)=> {
        postGenre(form)
            .then((genre) => {
               submitComplete(genre)
                reset({
                    type : ''
                })
                props.navigation.goBack()

            })
    }

    useEffect(()=>{
        register("type", {required:true})
    }, [register])


return(
    <View>
        <Card>
            <CardTitle title={"CREATE NEW GENRE"} />
            <Card.Content>
                <TextInput
                    mode={"outlined"}
                    label={"Name"}
                    onChangeText={(text)=>{
                        setValue('type', text)
                    }}
                />
                {errors.type && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
                <Button
                    onPress={handleSubmit(onSubmit)}
                ><FontAwesome name={"save"} size={25} /> Save </Button>
            </Card.Content>
        </Card>
    </View>
)
}
export default FormGenre;

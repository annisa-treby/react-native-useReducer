import React, {useEffect, useReducer} from 'react';
import {Container, Content} from 'native-base'
import {useForm} from 'react-hook-form';
import {postProfile} from '../../services/ProfileService';
import {ScrollView, ToastAndroid, View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

function SignUp(props) {

    const {register, handleSubmit, setValue, errors} = useForm()
    const {setVisible} = props

    useEffect(()=>{
        register('firstName')
        register('middleName')
        register('lastName')
        register('gender')
        register('email', {required:true})
        register('phone')
        register('birthDate')
        register('location')
        register('password', {required:true})
    })

    const onSubmit = (form) =>{
        postProfile(form)
            .then((profile)=>{
                showToast("Profile created Successfully")
                setVisible(false)
            })
    }

    const showToast = (message) =>{
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

return(
    <Container>
        <Card>
            <View style={styles.header}>
                <Text style={{fontSize:30, fontFamily:'Roboto', alignItems:'center'}}>Create New Account</Text>
            </View>
            <ScrollView>
            {errors.firstName && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"First Name"}
                onChangeText={(text)=>{
                    setValue('firstName', text)
                }}
            />
            {errors.middleName && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"Middle Name"}
                onChangeText={(text)=>{
                    setValue('middleName', text)
                }}
            />
            {errors.lastName && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"Last Name"}
                onChangeText={(text)=>{
                    setValue('lastName', text)
                }}
            />
            {errors.email && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"Email"}
                onChangeText={(text)=>{
                    setValue('email', text)
                }}
            />
            {errors.phone && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"Phone Number"}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                    setValue('phone', text)
                }}
            />
            {errors.birthDate && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"BirthDate"}
                placeHolder={"yyyy/MM/yy"}
                onChangeText={(text)=>{
                    setValue('birthDate', text)
                }}
            />
            {errors.location && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"Location"}
                onChangeText={(text)=>{
                    setValue('location', text)
                }}
            />
            {errors.location && <Text style={{color:"red"}}>*Please enter some text !!!</Text>}
            <TextInput
                mode={"outlined"}
                label={"Password"}
                securityTextEntry={true}
                onChangeText={(text)=>{
                    setValue('password', text)
                }}
            />
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Button
                onPress={handleSubmit(onSubmit)}
            ><FontAwesome name={"save"} size={25} /> Save </Button>
                <Button
                    onPress={()=>setVisible(false)}
                ><FontAwesome name={"step-backward"} size={25} /> Back </Button>
            </View>
            </ScrollView>
            </Card>
    </Container>
)
}
export default SignUp

const styles={
    header : {
        backgroundColor : '#8785a2',
        height : 50,
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:29,
        marginBottom : 10,
        marginTop : 10
    }
}

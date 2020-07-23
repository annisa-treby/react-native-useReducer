import React, {useEffect, useReducer, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Modal} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Faicon from 'react-native-vector-icons/dist/FontAwesome'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import {initialState, ProfileReducer} from '../../reducers/ProfileReducer';
import {FETCH_COMPLETE, SET_LOGIN} from '../../actions/ProfileActions';
import {getProfiles} from '../../services/ProfileService';
import SignUp from './SignUp';

function SignIn(props){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [state, dispatch] = useReducer(ProfileReducer, initialState)

    const {setSignedIn} = props
    const {profiles} = state

    const [visible, setVisible] = useState(false)

    const fetchComplete = (payload) => dispatch ({type:FETCH_COMPLETE, payload})

    const getData=()=>{
        getProfiles()
            .then((profiles)=>{
                fetchComplete(profiles)
            })
    }

    useEffect(()=>{
        getData()
    }, [])

    const onOpen = () =>{
        setVisible(true)
    }

    const loginValidation = () =>{

        const selectedProfile = profiles.find((profile)=>(profile.email == username && profile.password == password))

            if(selectedProfile) {
                setSignedIn(true)

            } else {
                alert("Incorrect account")
            }
    }

    return (
        <View style={styles.container}>

            <View style={{justifyContent: 'flex-end', flexDirection: 'row', alignItems:'center', marginTop:-70}}>
                <Text style={{marginTop: 0}}>Don't have an account? </Text>
                <Entypo
                    name="add-user"
                    size={30}
                    color="#ffb6b6"
                    style={{marginTop: 0}}
                    onPress={onOpen}
                />
            </View>

            <View style={styles.logo}>
                <Faicon name="music" size={250} color="#679b9b" />
            </View>
            <View style={styles.input}>
                <TextInput
                    mode="contained"
                    placeholder="Email"
                    autoCompleteType="username"
                    value={username}
                    onChangeText={(text) =>setUsername(text)}
                    style={{marginBottom: 10}}
                    underlineColor="#e6739f"
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    mode="contained"
                    value={password}
                    placeholder="Password"
                    style={{marginBottom: 10}}
                    underlineColor="#e6739f"
                    secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}
                />
            </View>
            <View style={styles.login}>
                <Button
                    mode="contained"
                    color="#ffb6b6"
                    onPress={loginValidation}>
                    Sign In
                </Button>
            </View>
            <Modal
            visible={visible}
            animationType={"fade"}
            >
                <SignUp setVisible={setVisible}/>
            </Modal>
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        padding : 16,
        backgroundColor :"#fde2e2"
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    input: {
        marginTop :5,
        marginLeft: 20,
        marginRight: 20,
        alignContent:'center',
    },
    login:{
        borderRadius:39,
        alignItems: 'center'
    }
});

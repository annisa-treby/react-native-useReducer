import React from 'react';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

class UserLogin extends React.Component {
    state = {
        username: "",
        password: "",
        token: "",
    }

    constructor(props) {
        super(props);
        this.getData();
    }


    onSubmit = async () => {
        try {
            this.setState({token: 'abc123'})
            await AsyncStorage.setItem('username', this.state.username)
            await AsyncStorage.setItem('token', 'abc123')
        }catch (e) {
            console.log(e, 'erroe');
        }
    }

    getData = async () =>{
        try {
            const value= await AsyncStorage.getItem('token')
            const username = await AsyncStorage.getItem('username')
            if (value !== null) {
                this.setState({token : value})
            }
            if (username !== null){
                this.setState({username })
            }
        }catch (e) {

        }
    }

    render() {
        return (
            <Card>
                <Text>{this.state.token}</Text>
                <Text>Username</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={val => this.setState({username:val})}/>
                <Text>Password</Text>
                <TextInput type={"password"}
                       value={this.state.password}
                       onChangeText={val => this.setState({password : val})}/>
                <Button title="Submit Login" onPress={this.onSubmit}>Submit</Button>
            </Card>
        )

    }
}
export default UserLogin

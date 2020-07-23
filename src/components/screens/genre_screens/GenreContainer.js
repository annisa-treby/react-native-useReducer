import React, {useEffect, useReducer} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {GenreReducer, initialState} from '../../reducers/GenreReducer';
import {FETCH_COMPLETE, SET_LOADING} from '../../actions/GenreActions';
import {getGenres} from '../../services/GenreServices';
import {Container, Content, Text} from 'native-base';
import { FAB } from 'react-native-paper';
import FormGenre from './FormGenre';
import ListGenre from './ListGenre';


function GenreContainer(props) {

    const [state, dispatch] = useReducer(GenreReducer, initialState);
    const {isLoading, genres} = state;

    const setLoading = () => dispatch({type:SET_LOADING})
    const fetchGenre = (payload) => dispatch({type:FETCH_COMPLETE, payload})

    const getData=()=>{
        setLoading();
        getGenres()
            .then((genres)=>{
                fetchGenre(genres)
            })
    }

    useEffect(()=>{
        getData()
    }, [])

    return(
    <Container>
        <Content>
            {
                isLoading ? <ActivityIndicator color='#8785a2' size="large"/> :
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={{fontSize:40, fontFamily:'Roboto', alignItems:'center'}}>G E N R E S</Text>
                        </View>
                        {
                            genres.map((genre, index)=>{
                                return(
                                   <ListGenre
                                   key={index}
                                   genre={genre}
                                   index={index}
                                   getData={getData}
                                   />
                                )
                            })
                        }
                    </ScrollView>
            }
        </Content>
    </Container>
    )
}

export default GenreContainer;

const styles = StyleSheet.create({

    header : {
        backgroundColor : '#8785a2',
        height : 50,
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:29,
        marginBottom : 10,
        marginTop : 10
    }
})

import React, {useEffect, useReducer} from 'react';
import {Container, Content, Text} from 'native-base';
import {AlbumReducer, initialState} from '../../reducers/AlbumReducers';
import {ActivityIndicator, FAB} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FETCH_COMPLETE, SET_LOADING} from '../../actions/AlbumActions';
import ListAlbum from './ListAlbum';
import {getAlbums} from '../../services/AlbumServices';

function AlbumContainer(props) {

    const [state, dispatch]=useReducer(AlbumReducer, initialState)
    const {isLoading, albums}=state

    const setLoading = () => dispatch({type:SET_LOADING})
    const fetchComplete = (payload) => dispatch({type: FETCH_COMPLETE, payload})

    const getData = () =>{
        setLoading()
        getAlbums()
            .then((albums)=>{
                fetchComplete(albums)
            })
    }

    useEffect(()=>{
        getData()
    }, [])

    return(
        <Container>
            <Content>
                <View style={styles.header}>
                    <Text style={{fontSize:40, fontFamily:'Roboto', alignItems:'center'}}>A L B U M</Text>
                </View>
                {
                    isLoading ? <ActivityIndicator color='#8785a2' size="large"/> :
                        <ScrollView>
                            {
                                albums.map((album, index)=>{
                                    return(
                                        <ListAlbum
                                        key={index}
                                        album={album}
                                        index={index+1}
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
export default AlbumContainer
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

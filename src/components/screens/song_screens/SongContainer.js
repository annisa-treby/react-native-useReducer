import React, {useEffect, useReducer} from 'react';
import {initialState, SongReducer} from '../../reducers/SongReducer';
import {Container, Content} from 'native-base'
import {FETCH_COMPLETE, SET_LOADING} from '../../actions/SongActions';
import { FAB} from 'react-native-paper';
import {ActivityIndicator,ScrollView, StyleSheet} from 'react-native';
import ListSong from './ListSong';
import {getSongs} from '../../services/SongService';

function SongContainer(props) {
    const [state, dispatch] = useReducer(SongReducer, initialState)
    const {isLoading, songs} = state
    const setLoading = () => dispatch ({type : SET_LOADING})
    const fetchComplete = (payload) => dispatch ({type : FETCH_COMPLETE, payload})

    const getData=()=>{
        setLoading()
            getSongs()
            .then((songs)=>{
                fetchComplete(songs)
            })
    }

    useEffect(()=>{
        getData()
    })

    return(
        <Container>
            <Content>
                {
                    isLoading ? <ActivityIndicator color='#8785a2' size="large"/> :
                        <ScrollView>
                            {
                                songs.map((song, index)=>{
                                    return (
                                        <ListSong
                                        key={index}
                                        index={index+1}
                                        song={song}
                                        getData={getData}
                                        />
                                    )
                                })
                            }
                        </ScrollView>
                }
            </Content>
            <FAB
                style={styles.plusBtn}
                medium
                icon="plus"
                getData={getData}
                onPress={()=> props.navigation.navigate('FormSong')}
            />
        </Container>
    )
}

export default SongContainer
const styles = StyleSheet.create({
    plusBtn : {
        position:'absolute',
        margin:16,
        bottom:0,
        right:0,
        backgroundColor:'#8785a2'
    }
})

import React, {useEffect, useReducer} from 'react';
import {Container, Content, Text} from 'native-base';
import {ArtistReducer, initialState} from '../../reducers/ArtistReducer';
import {getArtists} from '../../services/ArtistServices';
import {FETCH_COMPLETE, SET_LOADING} from '../../actions/ArtistActions';
import {ScrollView, StyleSheet, View} from 'react-native';
import ListArtist from './ListArtist';
import {FAB, ActivityIndicator} from 'react-native-paper';

function ArtistContainer(props) {

    const [state, dispatch] = useReducer(ArtistReducer, initialState)
    const {isLoading, artists} = state

    const setLoading = () => dispatch ({type:SET_LOADING})
    const fetchComplete = (payload) => dispatch ({type:FETCH_COMPLETE, payload})

    const getData = () =>{
        setLoading()
        getArtists()
            .then((artists)=>{
                fetchComplete(artists)
            })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <Container>
            <Content>
                <View style={styles.header}>
                    <Text style={{fontSize:40, fontFamily:'Roboto', alignItems:'center'}}>A R T I S T</Text>
                </View>
                {
                    isLoading ? <ActivityIndicator color='#8785a2' size="large"/> :
                    <ScrollView>
                        {
                            artists.map((artist, index)=>{
                                return(
                                    <ListArtist
                                        key={index}
                                        index={index+1}
                                        artist={artist}
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
export default ArtistContainer

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


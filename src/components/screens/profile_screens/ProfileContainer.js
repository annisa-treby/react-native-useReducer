import React, {useEffect, useReducer} from 'react';
import {View} from 'react-native';
import {initialState, ProfileReducer} from '../../reducers/ProfileReducer';
import {getProfiles} from '../../services/ProfileService';
import {FETCH_COMPLETE} from '../../actions/ProfileActions';

function ProfileContainer() {

    const [state, dispatch] = useReducer(ProfileReducer, initialState)


    return(
        <View>

        </View>
    )
}
export default ProfileContainer

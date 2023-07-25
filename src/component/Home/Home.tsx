import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Hometabbar from '../../navigation/Tabbar/Hometabbar'
import homecss from './homecss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [search, setsearch] = useState('')
    return (
        <View style={{ flex: 1 , backgroundColor:'#ffffff'}}>
            <View style={homecss.inputview}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={15} style={homecss.icon} />
                <TextInput
                    style={homecss.input}
                    onChangeText={setsearch}
                    value={search}
                    placeholder='Search Chat'
                />
            </View>
            <Hometabbar></Hometabbar>
        </View>
    )
}

export default Home
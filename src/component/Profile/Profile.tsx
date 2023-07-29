import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Profilecss from './Profilecss'

const Profile = () => {

    const DATA = [
        { id: 1, text: 'Language' },
        { id: 2, text: 'Display' },
        { id: 3, text: 'Backroung' },
        { id: 4, text: 'Size' },
        { id: 5, text: 'Font' },
    ]
    const renderitem = ({ item }: any) => {
        return (
            <TouchableOpacity style={Profilecss.touc}>
                <Text style={Profilecss.text}>{item.text}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Text style={Profilecss.text}> Setting</Text>
            <FlatList 
            style={Profilecss.flatlist}
            data={DATA}
            renderItem={renderitem}
            />
        </View>
    )
}

export default Profile
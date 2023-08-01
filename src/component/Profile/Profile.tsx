import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Profilecss from './Profilecss'
import { useSelector } from 'react-redux'

const Profile = () => {

    const item = useSelector((state:any)=>state.ProfilerReducer.value)
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
            data={item}
            renderItem={renderitem}
            />
        </View>
    )
}

export default Profile
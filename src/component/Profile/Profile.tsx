import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Profilecss from './Profilecss'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { usergetall } from '../../store/features/LoginRegisterStore/useraction'

const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();

    const items = useSelector((state: any) => state.ProfilerReducer.value)
    const userData = useSelector((state: any) => state.LoginRegisterreducer.userdata1)

    const renderitem = ({ item }: any) => {
        return (
            <TouchableOpacity style={Profilecss.touc}>
                <Text style={Profilecss.text}>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        if (userData) {
            dispatch(usergetall(userData));
        }
    }, [userData]);

    return (
        <View>
            <Text style={Profilecss.text}>Setting: {userData.email}</Text>
            <FlatList 
                style={Profilecss.flatlist}
                data={items}
                renderItem={renderitem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Profile;

import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import chatcss from './chatcss'
import { useSelector } from 'react-redux'
const Chat = ({navigation}:any) => {
    const item = useSelector ((state:any)=> state.ChatReducer.value)

    const renderitem = ({ item }: any) => {
        return (
            <TouchableOpacity style={chatcss.touc} onPress={()=> navigation.navigate('Chatscreen2', { screen: 'Chatscreen' })}>
                <View style={chatcss.view1}>
                    <View style={chatcss.imgview}>
                        <Image
                            source={item.img}
                            style={chatcss.img}
                        />
                    </View>
                    <View style={chatcss.text1}>
                        <Text style={chatcss.nametext}>{item.name}</Text>
                        <Text style={chatcss.mesagetext}>{item.message}</Text>
                    </View>
                </View>
                <View style={chatcss.text2}>
                    <Text style={chatcss.datetext}>{item.date}</Text>
                    {item.message1 ? (
                        <View style={chatcss.messahe1view}>
                            <Text style={chatcss.message1text}>{item.message1}</Text>
                        </View>
                    ) : null}
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={item}
                renderItem={renderitem}
            // contentContainerStyle={{ flexGrow: 1 }}
            // horizontal={false}

            />
        </View>
    )
}

export default Chat
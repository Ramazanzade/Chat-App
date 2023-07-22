import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import chatcss from './chatcss'

const Chat = ({navigation}:any) => {

    const DATA = [
        { id: 1, name: 'Nizam', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam' },
        { id: 2, name: 'Amar', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam', message1: '2' },
        { id: 3, name: 'Cəsi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam' },
        { id: 4, name: 'Tural', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam', message1: '3' },
        { id: 5, name: 'Nəbi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam' },

    ]
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
                data={DATA}
                renderItem={renderitem}
            // contentContainerStyle={{ flexGrow: 1 }}
            // horizontal={false}

            />
        </View>
    )
}

export default Chat
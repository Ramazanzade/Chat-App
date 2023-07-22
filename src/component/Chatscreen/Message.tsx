import { View, Text, FlatList } from 'react-native'
import React from 'react'
import chatscreencss from './chatscreencss'

const Message = () => {
    const DATA = [
        {
            id: 1, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 2, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 3, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 4, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 5, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 6, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 7, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 8, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },
        {
            id: 9, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
        },


    ]
    const renderitem = ({ item }: any) => {
        const isOdd = item.id % 2 === 1;
        const styles = isOdd ? chatscreencss.gelen : chatscreencss.gedən;
        const style1 = isOdd ? chatscreencss.textgelen : chatscreencss.textgedən;
        const style2 = isOdd ? chatscreencss.dategelen : chatscreencss.dategedən;

        return (
            <View>
                <View style={[chatscreencss.textview, styles]}>
                    <Text style={[chatscreencss.text1, style1]}>{item.text}</Text>
                </View>
                <View style={[chatscreencss.dateview , style2]}>
                    <Text style={[chatscreencss.datetext1, style2]}>{item.date}</Text>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderitem}
            />
        </View>
    )
}

export default Message

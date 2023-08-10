import { View, Text, FlatList } from 'react-native'
import React from 'react'
import chatscreencss from './chatscreencss'
import { useSelector } from 'react-redux'
const Message = () => {

const item = useSelector((state:any)=>state.Messagereducer.value)
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
                data={item}
                renderItem={renderitem}
            />
        </View>
    )
}

export default Message

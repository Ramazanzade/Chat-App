import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import chatscreencss from './chatscreencss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Messagesend = () => {
    const [message, setmessage] = useState('')
    return (
        <View style={chatscreencss.inputview}>
            <View style={chatscreencss.imputview}>
                <TextInput
                    style={chatscreencss.input}
                    onChangeText={setmessage}
                    value={message}
                    placeholder="Type here..."
                />
            </View>
            <View style={chatscreencss.iconview1}>
                <TouchableOpacity style={chatscreencss.icontouch}>
                    <FontAwesomeIcon icon={faCamera} color='#8D8D8D' size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faMicrophone} color='#8D8D8D' size={30} />
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Messagesend
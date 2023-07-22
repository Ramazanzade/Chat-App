import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import chatscreencss from './chatscreencss'

const Messagesend = () => {
    const [message , setmessage]=useState('')
  return (
    <View>
         <TextInput
        style={chatscreencss.input}
        onChangeText={setmessage}
        value={message}
        placeholder="Type here..."
      />
  

    </View>
  )
}

export default Messagesend
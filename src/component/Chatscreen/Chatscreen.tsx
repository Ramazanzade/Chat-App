import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import chatscreencss from './chatscreencss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';
import Message from './Message';
import Messagesend from './Messagesend';


const Chatscreen = () => {
  return (
    <View style={{flex:1}}>
      <View style={chatscreencss.view}>
        <View style={chatscreencss.view1}>
          <View>
            <Image
              source={require('../../asset/imge/1.png')}
              style={chatscreencss.img}
            />
          </View>
          <View style={chatscreencss.view2}>
            <Text style={chatscreencss.nametext}> Nizam</Text>
            <Text style={chatscreencss.online}>yazır....</Text>
          </View>
        </View>
        <View style={chatscreencss.iconview}>
          <TouchableOpacity style={chatscreencss.icon}>
            <FontAwesomeIcon icon={faVideo} color='#771F98' size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPhone} color='#771F98' size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Message />
      </View>
      <Messagesend></Messagesend>
    </View>
  )
}

export default Chatscreen
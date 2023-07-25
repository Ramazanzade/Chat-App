import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import fridenscss from './fridenscss';

const Friensd = () => {
  return (
    <View>
<View style={fridenscss.touchview}>
    <TouchableOpacity style={fridenscss.touc}>
    <FontAwesomeIcon icon={faUserPlus} size={15} style={fridenscss.icon} />
    </TouchableOpacity>
</View>
    </View>
  )
}

export default Friensd
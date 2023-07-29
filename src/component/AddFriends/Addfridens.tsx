import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Addfriendscss from './Addfriendscss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus , faMicrophone , faCamera} from '@fortawesome/free-solid-svg-icons';

const Addfridens = () => {
    return (
        <View >
            <View style={Addfriendscss.toucview}>
            <TouchableOpacity style={Addfriendscss.touc1}>
                <FontAwesomeIcon icon={faMicrophone} size={65} style={Addfriendscss.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={Addfriendscss.touc1}>
                <FontAwesomeIcon icon={faCamera} size={65} style={Addfriendscss.icon} />
            </TouchableOpacity> 
            </View>
            <TouchableOpacity style={Addfriendscss.touc}>
                <FontAwesomeIcon icon={faUserPlus} size={65} style={Addfriendscss.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Addfridens
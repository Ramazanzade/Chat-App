import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import callcss from './callcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo, faPhone, faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const Call = () => {
   const item = useSelector((state:any)=> state.CallReducer.value)
    const renderitem = ({ item }: any) => {
        return (
            <TouchableOpacity style={callcss.touc}>
                <View style={callcss.view1}>
                    <View style={callcss.imgview}>
                        <Image
                            source={item.img}
                            style={callcss.img}
                        />
                    </View>
                    <View style={callcss.text1}>
                        <Text style={callcss.nametext}>{item.name}</Text>
                        <View style={callcss.view2}>
                            {item.gəlib ? (
                                <FontAwesomeIcon icon={faRightLong} color='#771F98'  size={20} />
                            ) : (
                                <FontAwesomeIcon icon={faLeftLong} color='#771F98' size={20} />
                            )
                            }
                            <Text style={callcss.datetext}>{item.date}</Text>
                        </View>
                    </View>
                </View>
                <View style={callcss.text2}>
                    {item.call ? (
                        <FontAwesomeIcon icon={faPhone} color='#771F98'  size={20} />
                    ) : (
                        <FontAwesomeIcon icon={faVideo} color='#771F98'  size={20} />
                    )
                    }
                </View>
            </TouchableOpacity>
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

export default Call
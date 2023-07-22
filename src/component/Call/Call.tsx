import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import callcss from './callcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faVideo, faPhone, faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const Call = () => {
    const DATA = [
        { id: 1, name: 'Nizam', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', call: 'zəng', gəlib: "zəng" },
        { id: 2, name: 'Amar', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', video: 'zəng', gedib: "zəng" },
        { id: 3, name: 'Cəsi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', call: 'zəng', gedib: "zəng" },
        { id: 4, name: 'Tural', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', call: 'zəng', gəlib: "zəng" },
        { id: 5, name: 'Nəbi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', video: 'zəng', gedib: "zəng" },

    ]

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
                data={DATA}
                renderItem={renderitem}
            // contentContainerStyle={{ flexGrow: 1 }}
            // horizontal={false}

            />
        </View>
    )
}

export default Call
import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import onboardingcss from './onboardingcss'

export default function Onboardig({navigation}:any) {
  return (
    <View>
<View style={onboardingcss.view1}>
    <Text style={onboardingcss.text1}>Get Closer To EveryOne</Text>
    <Text style={onboardingcss.text2}>Helps you to contact everyone with just easy way</Text>
</View>
<View style={onboardingcss.imgview}>
<Image
          source={require('../../asset/imge/1.png')}
          style={onboardingcss.img}
        />
</View>
<View style={onboardingcss.toucview} >
    <TouchableOpacity style={onboardingcss.touc} onPress={()=> navigation.navigate('LoginRegisterScreen', { screen: 'LoginRegister' })}>
        <Text style={onboardingcss.touctext}>Get Started</Text>
    </TouchableOpacity>
</View>
    </View>
  )
}
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import loginregistercss from './loginregistercss'
import onboardingcss from '../Onboarding/onboardingcss'

export default function LoginRegister({navigation}:any) {
    const [name , setname]=useState('')
    const [paswword, setpaswword] = useState('')
    const [email, setemail] = useState('')
    return (
        <View style={loginregistercss.continur}>
            <View style={loginregistercss.textview}>
                <Text style={loginregistercss.text1}>Hello, Welcome Back</Text>
                <Text style={loginregistercss.text2}>Happy to see you again, to use your account please login first.</Text>
            </View>
            <View style={loginregistercss.imgview}>
                <Image
                    source={require('../../asset/imge/2.png')}
                    style={loginregistercss.img}
                />
            </View>
            <View style={loginregistercss.imputview}>
            <View>
                    <Text style={loginregistercss.imputtext}>Name</Text>
                    <TextInput
                        style={loginregistercss.imput}
                        onChangeText={setname}
                        value={name}
                    />
                </View>
                <View >
                    <Text style={loginregistercss.imputtext}>Email Address</Text>
                    <TextInput
                        style={loginregistercss.imput}
                        onChangeText={setemail}
                        value={email}
                    />
                </View>
                <View>
                    <Text style={loginregistercss.imputtext}>Password</Text>
                    <TextInput
                        style={loginregistercss.imput}
                        onChangeText={setpaswword}
                        value={paswword}
                    />
                </View>

            </View>
            <View style={loginregistercss.toucview} >
                <TouchableOpacity style={[onboardingcss.touc, {height:60}]} onPress={() => navigation.navigate('LoginRegisterScreen', { screen: 'LoginRegister' })}>
                    <Text style={[onboardingcss.touctext,{marginTop:'5%'}]}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
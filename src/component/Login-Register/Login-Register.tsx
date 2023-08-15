import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import loginregistercss from './loginregistercss'
import onboardingcss from '../Onboarding/onboardingcss'
import { useDispatch } from 'react-redux'
import { userregister } from '../../store/features/LoginRegisterStore/useraction'
import { AppDispatch } from '../../store/store'
export default function LoginRegister({ navigation }: any) {
    const [name, setname] = useState<string>('')
    const [password, setpaswword] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
  
    const Register = () => {
        const userdata = { name, password, email }; 

        dispatch(userregister(userdata)) 

        .then((action) => {
            const responsePayload = action.payload;
            console.log('Registration successful:', responsePayload);
            console.log('salam');
        })
        .catch((error) => {
            console.error('Registration failed:', error);
            console.log(error);
        });
    }

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
                        value={password}
                    />
                </View>

            </View>
            <View style={loginregistercss.toucview} >
                <TouchableOpacity style={[onboardingcss.touc, { height: 60 }]} onPress={Register}>
                    <Text style={[onboardingcss.touctext, { marginTop: '5%' }]}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
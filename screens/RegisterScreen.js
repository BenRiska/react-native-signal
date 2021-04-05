import React, {useState, useLayoutEffect} from 'react'
 import { View,StyleSheet } from 'react-native'
 import {StatusBar} from "expo-status-bar"
 import {Button, Input, Text} from "react-native-elements"
import { KeyboardAvoidingView } from 'react-native'
import {auth} from "../firebase"
 
 const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageURL, setImageURL] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",
            headerTintColor: "white"
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageURL || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
            })
        })
        .catch(error => alert(error.message))
    }

     return ( 
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
             <StatusBar style="light"/>
             <Text h3 style={styles.header}>Create a signal account</Text>
             <View style={styles.inputContainer}>
                <Input placeholder="Full Name" type="text" value={name} autoFocus onChangeText={text => setName(text)}/>
                 <Input placeholder="Email" type="email" value={email}  onChangeText={text => setEmail(text)}/>
                 <Input placeholder="Password" type="password" value={password} secureTextEntry onChangeText={text => setPassword(text)}/>
                 <Input placeholder="Profile Picture URL (optional)" type="text" value={imageURL}  onChangeText={text => setImageURL(text)} onSubmitEditing={register}/>
             </View>
             <Button raised style={styles.button} onPress={register} title="Register" />
             <View style={{height: 100}}/>
         </KeyboardAvoidingView>
     )
 }
 
 export default RegisterScreen
 
 const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
     },
     header: {
        marginBottom: 50,
        
     },
     inputContainer: {
        width: 300
     },
     button: {
        width: 200,
        marginTop: 10
     }
 })
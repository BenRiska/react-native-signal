 import React, {useState, useEffect} from 'react'
 import { View, StyleSheet } from 'react-native'
 import {StatusBar} from "expo-status-bar"
 import {Button, Input, Image} from "react-native-elements"
import { KeyboardAvoidingView } from 'react-native'
import {auth} from "../firebase"
 
 const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if(authUser){
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    })

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch(error => alert(error.message))
    }

     return ( 
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
             <StatusBar style="light"/>
             <Image 
             source={{uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"}}
             style={{width: 200, height: 200}}
             />
             <View style={styles.inputContainer}>
                 <Input placeholder="Email" type="email" value={email} autoFocus onChangeText={text => setEmail(text)}/>
                 <Input placeholder="Password" type="password" value={password} secureTextEntry onChangeText={text => setPassword(text)}/>
             </View>
             <Button style={styles.button} onPress={signIn} title="Login" />
             <Button onPress={() => navigation.navigate("Register")} style={styles.button} type="outline" title="Register" />
             <View style={{height: 100}}/>
         </KeyboardAvoidingView>
     )
 }
 
 export default LoginScreen
 
 const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
     },
     inputContainer: {
        width: 300
     },
     button: {
        width: 200,
        marginTop: 10
     }
 })
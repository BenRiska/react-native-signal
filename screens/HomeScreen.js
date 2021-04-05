import React, {useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import {Avatar} from "react-native-elements"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CustomListItem from '../components/CustomListItem'
import {auth, db} from "../firebase"
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"

const HomeScreen = ({navigation}) => {

    const signOutUser = () => {
        auth.signOut().then(() => navigation.replace("Login"))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {color: "black"},
            headerTintColor: "black",
            headerLeft: () => <View style={{marginLeft: 20}}>
                <TouchableOpacity>
                    <Avatar rounded
                    source={{
                    uri: auth?.currentUser?.photoURI || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                }} onPress={signOutUser}/>
                </TouchableOpacity>
            </View>,
            headerRight: () => <View style={{marginRight: 20, flexDirection: "row", justifyContent: "space-between", width: 80, alignItems: "center"}}>
                <TouchableOpacity activeOpacity={0.5}>
                    <AntDesign name="camerao" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <SimpleLineIcons name="pencil" size={24} color="black" />
                </TouchableOpacity>
            </View>
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

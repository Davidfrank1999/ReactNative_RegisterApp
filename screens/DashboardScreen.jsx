import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import auth from '../services/firebaseAuth'

export default function DashboardScreen({navigation}) {

    const handleLogout =() => {
        signOut(auth)
        .then(()=> {
            navigation.navigate('Login')
        })
        
    }
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <Text
        style={{
            fontSize:20,
            marginVertical:20,
        }}
      >
        Welcome to Dashboard
        </Text>

      <Button title="Log out" onPress={handleLogout}/>
    </View>
  )
}

const styles = StyleSheet.create({})
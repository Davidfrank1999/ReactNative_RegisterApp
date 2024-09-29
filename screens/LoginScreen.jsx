import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../services/firebaseAuth'

export default function RegisterScreen({navigation}) {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const checkIfLoggedIn =()=> {
        onAuthStateChanged(auth,(user) => {
            if(user) {
                navigation.navigate('Dashboard')
            }
        })
    }

    // when a app loads useEffect runs
    useEffect(() => {
        checkIfLoggedIn()
    },[])

    const handleRegister = () => {
        setError('');
        //console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then ((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Dashboard');
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    const handleGotoRegister =() => {
        navigation.navigate('Register')
    }

  return (
    <View style={styles.RegContiner}>
      <Text
        style={{fontSize:20,fontWeight:"bold"}}
      >Login
      </Text>

      <TextInput 
        placeholder="Email"
        style={styles.inputBox}
        onChangeText={setEmail}
        />

      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.inputBox}
        onChangeText={setPassword}
        />

    <Button 
        title="Log in"
        onPress={handleRegister}
        />
    {error && <Text style={{color:"red"}}>{error}</Text>}
    <Text 
        style={{marginVertical:20}} 
        onPress={handleGotoRegister}
    >
        Create account ?
    </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
    RegContiner: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },

    inputBox: {
        width: 200,
        borderWidth: 1,
        borderColor: "gray",
        marginVertical: 10,
        paddingHorizontal:8,
    },
});

import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Image, Text } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {

            if (authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, []);

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(eror));
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",

                }}
                style={{ width: 150, height: 150 }}
            />

            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="password" onSubmitEditing={signIn} value={password} onChangeText={(text) => setPassword(text)} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register" />
            {/* <View style={{ height: 80 }} /> */}
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
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,

    },
    button: {
        width: 300,
        marginTop: 10
    },
})

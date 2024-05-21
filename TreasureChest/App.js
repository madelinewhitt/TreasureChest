import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

const PlaceholderImage = require('./assets/PGMLogo.png');

export default function App() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Add functionality for login button press here
    console.log('Login button pressed');
  };

  const handleForgotPasswordPress = () => {
    // Add functionality for forgot password press here
    console.log('Forgot Password pressed');
  };

  const handleCreateAccountPress = () => {
    // Add functionality for create account press here
    console.log('Create Account pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={styles.title}>Treasure Chest</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={text}
          onChangeText={setText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.createAccountContainer} onPress={handleCreateAccountPress}>
        <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#031131',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  title: {
    color: '#ceaf0e',
    fontSize: 22,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: 20, // Add margin to separate the image from the inputs
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 18,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 10, // Reduced margin for closer spacing
  },
  loginButton: {
    width: '80%',
    padding: 10,
    backgroundColor: '#ceaf0e',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Reduced margin for closer spacing
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#ceaf0e',
    textDecorationLine: 'underline',
    marginTop: 10, // Add margin for spacing
  },
  createAccountContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  createAccountText: {
    color: '#ceaf0e',
    textDecorationLine: 'underline',
  },
});
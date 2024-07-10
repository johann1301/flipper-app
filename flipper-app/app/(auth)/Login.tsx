import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import logo from '@/assets/images/Logo.png';
import { FLIPPER_AUTH } from '../../firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FLIPPER_AUTH;

  const handleSignin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful ' + response.message);
    } catch (error) {
      alert('Login failed ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >

        <Image source={logo} style={styles.logo} />
        <Text style={styles.headline}>Flipper</Text>
        
        <TextInput
          style={styles.input}
          placeholder="E-Mail"
          placeholderTextColor={Colors.white}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={Colors.white}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} /> 
        ) : (
          <>
            <TouchableOpacity>
              <Text style={styles.description}>
                <Text style={styles.link}>Forgot Password?</Text>
              </Text>
            </TouchableOpacity>
  
              <TouchableOpacity style={styles.button} onPress={handleSignin} >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            
            <Link href={'/Signup'} asChild>
              <TouchableOpacity>
                <Text style={styles.description}>
                  Don't have an account?{' '}
                  <Text style={styles.link}>Sign up</Text>
                </Text>
              </TouchableOpacity>
            </Link>
          </>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2B2B2B',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: Colors.white,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#1F1F1F',
    borderRadius: 5,
    color: Colors.white,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
    color: Colors.white,
  },
  link: {
    color: Colors.green,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.darkGreen,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '500',
  },
});

export default Login;
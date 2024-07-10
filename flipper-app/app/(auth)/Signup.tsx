import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import logo from '@/assets/images/Logo.png';

const Page = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headline}>Flipper</Text>
        
            <KeyboardAvoidingView
              style={styles.formContainer}
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor={Colors.white}
                value={userName}
                onChangeText={setUserName}
                autoCapitalize="none"
              />

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

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor={Colors.white}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
              />

              {loading ? (
                <ActivityIndicator size="large" color={Colors.white} /> 
              ) : (
                <>
                  <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>

                  <Link href={'/signin'} asChild>
                      <Text style={styles.description}>
                          Already have an account?{' '}
                        <Text style={styles.link}>
                          Sign in
                        </Text>
                      </Text>
                  </Link>
                </>
              )}
            </KeyboardAvoidingView>
          </View>
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

export default Page;
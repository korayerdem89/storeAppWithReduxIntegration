import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import TextInput from '../../components/Input';

import styles from './Login.style';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
      <TextInput placeholder="Kullanıcı adı giriniz" />
      <TextInput placeholder="Şifrenizi giriniz" />
        <Text>Dükkan</Text>
      </View>
      <View style={styles.body_container}>
        <Text>Dükkan</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

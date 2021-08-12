import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import TextInput from '../../components/Input';
import Button from '../../components/Button';

import styles from './Login.style';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
      <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.body_container}>
        <TextInput placeholder="Kullanıcı adı giriniz" />
        <TextInput placeholder="Şifrenizi giriniz" />
        <Button text="Giriş" />
      </View>
    </SafeAreaView>
  );
};

export default Login;

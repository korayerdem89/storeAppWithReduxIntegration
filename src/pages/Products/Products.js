import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import config from '../config';

const Products = () => {
  return (
    <SafeAreaView>
      <Text>Hi! {config.API_URL} </Text>
    </SafeAreaView>
  );
};

export default Products;

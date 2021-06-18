import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, ActivityIndicator} from 'react-native';
import config from '../config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const {loading, data, error} = useFetch(config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{marginTop: 250}}
      />
    );
  }
  if (error) {
    return <Text>Bir hata oluştu</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
      <Text>Hi</Text>
    </SafeAreaView>
  );
};

export default Products;

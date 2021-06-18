import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, ActivityIndicator} from 'react-native';
import config from '../config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(config.API_URL);
      setData(productData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

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
if(error){
  return <Text>Bir hata oluştu</Text>
}

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
      <Text>Hi</Text>
    </SafeAreaView>
  );
};

export default Products;

import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import config from '../config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard'

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(config.API_URL);
    setData(productData);
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
      <Text>Hi</Text>
    </SafeAreaView>
  );
};

export default Products;

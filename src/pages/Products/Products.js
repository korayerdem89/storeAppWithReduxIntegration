import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import config from '../config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(config.API_URL);
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={ () => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
      <Text>Hi</Text>
    </SafeAreaView>
  );
};

export default Products;

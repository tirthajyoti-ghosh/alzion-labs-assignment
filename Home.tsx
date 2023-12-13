import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  Pressable,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import api from './services/api';

export default function Home() {
  const {
    data: plants,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['plants'],
    queryFn: () =>
      api.get('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q'),
  });

  const navigation = useNavigation();

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
      }}>
      <FlatList
        style={{height: '30%', width: '100%'}}
        data={plants}
        renderItem={({item: plant}) => (
          <Pressable onPress={() => navigation.navigate('Plant', plant)}>
            <View
              style={{
                backgroundColor: '#9CE5CB',
                marginBottom: 10,
                marginHorizontal: 10,
                borderRadius: 25,
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {plant.category}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Philosopher-Bold',
                    fontSize: 32,
                  }}>
                  {plant.name}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 18,
                    fontWeight: '600',
                  }}>
                  ${plant.price}
                </Text>
              </View>
              <Image
                source={{uri: plant.image}}
                style={{width: 100, height: 100}}
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

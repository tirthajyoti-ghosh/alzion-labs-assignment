import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import api from './services/api';
import Header from './components/Header';

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
    <View style={styles.container}>
      <Header icon="bell" />
      <FlatList
        data={plants}
        style={{width: '100%'}}
        renderItem={({item: plant}) => (
          <Pressable onPress={() => navigation.navigate('Plant', plant)}>
            <View style={styles.itemContainer}>
              <View>
                <Text style={styles.category}>{plant.category}</Text>
                <Text style={styles.name}>{plant.name}</Text>
                <Text style={styles.price}>${plant.price}</Text>
              </View>
              <Animated.Image
                source={{uri: plant.image}}
                style={styles.plantImg}
                sharedTransitionTag={`${plant.id}`}
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  plantImg: {
    width: 150,
    aspectRatio: 0.8,
    position: 'absolute',
    right: 20,
    top: -50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    backgroundColor: '#fff',
  },
  itemContainer: {
    backgroundColor: '#9CE5CB',
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  name: {
    color: 'black',
    fontFamily: 'Philosopher-Bold',
    fontSize: 32,
  },
  price: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
  },
});

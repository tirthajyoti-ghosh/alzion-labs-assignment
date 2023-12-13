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
                style={{width: 100, height: 100}}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    backgroundColor: '#fff',
  },
  itemContainer: {
    backgroundColor: '#9CE5CB',
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
  },
});

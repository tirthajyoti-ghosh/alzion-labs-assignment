import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Header from './components/Header';

export default function Plant({route}) {
  const plant = route.params;
  return (
    <View style={styles.outerContainer}>
      <View style={styles.bg} />
      <Header icon="search" />
      <View style={styles.container}>
        <View>
          <Text style={{color: 'black', fontSize: 14, fontFamily: 'Poppins'}}>
            {plant.category}
          </Text>
          <Text style={styles.heading}>{plant.name}</Text>
          <Text
            style={{
              ...styles.text,
              marginVertical: 30,
            }}>
            <Text style={styles.label}>PRICE</Text>
            {'\n'}${plant.price}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>PRICE</Text>
            {'\n'}
            {plant.size}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: -20}}>
            <Image source={require('./assets/images/cart.png')} />
            <Image source={require('./assets/images/favourite.png')} />
          </View>
        </View>
        <Animated.Image
          source={{uri: plant.image}}
          style={styles.plant}
          sharedTransitionTag={`${plant.id}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  plant: {
    width: 250,
    aspectRatio: 0.8,
    position: 'absolute',
    top: 50,
    right: 0,
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '600',
  },
  heading: {
    color: 'black',
    fontFamily: 'Philosopher-Bold',
    fontSize: 32,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  bg: {
    backgroundColor: '#9CE5CB',
    position: 'absolute',
    zIndex: -1,
    width: '200%',
    height: '100%',
    maxHeight: '75%',
    left: '-20%',
    top: '-20%',
    transform: [{rotate: '-20deg'}],
    borderRadius: 50,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  label: {
    color: '#002140',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
});

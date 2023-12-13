import React from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

export default function Plant({route}) {
  const plant = route.params;
  return (
    <View style={{flex: 1, paddingTop: 50, paddingHorizontal: 30}}>
      <View>
        <Text style={{color: 'black', fontSize: 14, fontFamily: 'Poppins'}}>
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
            marginVertical: 50,
          }}>
          ${plant.price}
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
            fontWeight: '600',
          }}>
          {plant.size}
        </Text>
      </View>
      <Animated.Image
        source={{uri: plant.image}}
        style={{
          width: 250,
          aspectRatio: 0.8,
          position: 'absolute',
          top: 50,
          right: 0,
        }}
        sharedTransitionTag={`${plant.id}`}
      />
    </View>
  );
}

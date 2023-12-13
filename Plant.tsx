import React from 'react';
import {Image, Text, View} from 'react-native';

export default function Plant({route}) {
  const plant = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{color: 'black', fontSize: 14, fontFamily: 'Poppins'}}>
          {plant.category}
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Philosopher-Bold',
            fontSize: 32,
            fontWeight: '700',
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
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
            fontWeight: '600',
          }}>
          {plant.bio}
        </Text>
      </View>
      <Image source={{uri: plant.image}} style={{width: 100, height: 100}} />
    </View>
  );
}

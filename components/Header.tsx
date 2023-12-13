import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const headerIcon = {
  bell: require('../assets/images/bell.png'),
  search: require('../assets/images/search.png'),
};

export default function Header({icon}: {icon: 'bell' | 'search'}) {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
        <Image source={headerIcon[icon]} style={styles.icon} />
        <Image
          source={require('../assets/images/menu.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 99,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'transparent',
  },
  logo: {
    height: 40,
    width: 200,
    objectFit: 'contain',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
});

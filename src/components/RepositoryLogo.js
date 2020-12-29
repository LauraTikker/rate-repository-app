import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const imageStyles = StyleSheet.create({
  container: {
    margin: '5%',
    flexGrow: 0,
  },
  image: {
      width: 50,
      height: 50,
    },

});

const RepositoryLogo = ({item}) => {
  return (
       <View style={imageStyles.container}>
            <Image source={{uri: item.ownerAvatarUrl}}
              style={imageStyles.image}
               />
       </View>
  );
};

export default RepositoryLogo;
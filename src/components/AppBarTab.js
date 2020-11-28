import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingRight: '10%',
  },
});

const AppBar = ({ tabName, link }) => {
  return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Link to={link}>
                    <View>
                        <Text fontWeight="bold" fontSize="subheading" color="white">{tabName}</Text>
                    </View>
                </Link>
            </TouchableWithoutFeedback>
        </View>
  )
};

export default AppBar;
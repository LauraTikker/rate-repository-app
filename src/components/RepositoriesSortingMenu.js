import React, { useState } from 'react';
import { Menu, Button, Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '2%',
   },
});
const RepositoriesSortingMenu = ({ orderByHighestRated, orderByLowestRated, orderByLatestReview, onChangeSearch, searchQuery }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View>
        <Searchbar
            placeholder="Search"
            onChangeText={(query) => onChangeSearch(query)}
            value={searchQuery}
        />
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <View style={styles.container}>
                    <Button icon="arrow-down-drop-circle-outline" onPress={openMenu}>
                        <Text fontWeight="bold" fontSize="subheading" color="black">Sort repositories</Text>
                    </Button>
                </View>
                }>
                <Menu.Item
                    icon="new-box"
                    onPress={() => {
                        orderByLatestReview();
                        closeMenu();
                        }}
                    title="Latest repositories" />
                <Menu.Item
                    icon="arrow-up-bold-circle"
                    onPress={() => {
                        orderByHighestRated();
                        closeMenu();
                        }}
                    title="Highest rated repositories" />
                <Menu.Item
                    icon="arrow-down-bold-circle"
                    onPress={() => {
                        orderByLowestRated();
                        closeMenu();
                        }}
                    title="Lowest rated repositories" />
        </Menu>
     </View>
  );
};

export default RepositoriesSortingMenu;
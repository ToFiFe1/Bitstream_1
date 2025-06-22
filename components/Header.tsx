import React, { useState } from 'react';
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    console.log('Suchtext:', text); // Hier kannst du später eine Filterfunktion einsetzen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchbar}
          placeholder="Suche..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={handleSearch}
        />
        <View style={styles.menu}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
   
  },
  container: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#222',
    borderRadius: 40,
    marginTop: Platform.OS === 'web' ? 200 : 20,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 0.5 },
    shadowColor: '#fff',
    shadowOpacity: 0.5,
  },
  searchbar: {
    flex: 1,
    height: 40,
    backgroundColor: '#fffff6',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: '#555',
    borderRadius: 20,
  },
});

export default Header;

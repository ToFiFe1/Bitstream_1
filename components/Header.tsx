import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

// Web-Dropdown-Komponente
const WebDropdown = () => {
  if (Platform.OS !== 'web') return null;

  return (
    <select
      style={stylesWeb.dropdown}
      defaultValue=""
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        console.log('Dropdown selected:', e.target.value)
      }
    >
      <option value="" disabled>Auswahl</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
};

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <TextInput
            style={[
              styles.searchbar,
              Platform.OS === 'ios' && styles.searchbarIOS,
              Platform.OS === 'web' && styles.searchbarWeb,
            ]}
            placeholder="Suche..."
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
            clearButtonMode="while-editing"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <WebDropdown />
        </View>
        <View style={styles.menuIcon} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
  },
  container: {
    alignSelf: 'center',
    width: Platform.OS === 'web' ? 600 : '90%',
    maxWidth: 600,
    height: 60,
    marginTop: Platform.OS === 'web' ? 20 : 20,
    backgroundColor: '#222',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Platform.OS === 'web' ? 10 : 0,
  },
  searchbar: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: '#00aaff',
    borderWidth: 1,
    fontSize: 16,
    color: '#222',
  },
  searchbarIOS: {
    backgroundColor: '#f9f9f9',
  },
  searchbarWeb: {
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
  },
  menuIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#555',
    borderRadius: 20,
    marginLeft: 10,
  },
});

const stylesWeb = {
  dropdown: {
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    padding: '0 10px',
    backgroundColor: '#fff',
    color: '#222',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: 16,
    minWidth: 120,
  } as React.CSSProperties,
};

export default Header;

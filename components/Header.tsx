import React from 'react';
import { SafeAreaView, View, Text, Platform, StyleSheet } from 'react-native';

const Header = () => (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
           <Text style={styles.text}>Bitstream</Text>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    safeArea: {
        
    },
    text:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto_Condensed-Black',        
        marginBottom: Platform.OS === 'ios' ? 0 : 0, // Adjust for iOS notch
    },
    container: {
        width: '100%',
        backgroundColor: '#222',
        borderTopLeftRadius: Platform.OS === 'web' ? 8 : 50,
        borderTopRightRadius: Platform.OS === 'web' ? 8 : 50,
        top: Platform.OS === 'web' ? -20 : 0,
        paddingVertical: 40,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
    },
});

export default Header;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Update the import path below if your Searchbar component is in a different location
import  Searchbar  from '@/components/Seachbar';


const ExploreScreen: React.FC = () => {
    return (
        <View style={styles.container}>
       
            <View style={styles.container2}>
                <StatusBar hidden={true} />
                <Searchbar></Searchbar>
            
            {/* Add your explore content here */}
            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
        borderRadius: 47,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 20,
        marginTop: 2,
     
        width: '98%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        zIndex: 1,
    },
});

export default ExploreScreen;
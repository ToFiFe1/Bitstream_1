import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Update the import path below if your Searchbar component is in a different location
 
import  H  from '@/components/Header';
import { Platform } from 'react-native';


const ExploreScreen: React.FC = () => {
    return (
        <View style={styles.container}>
       
            <View style={styles.container2}>
                <StatusBar hidden={true} />
                <H></H>
                
                
                
            
            {/* Add your explore content here */}
            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 2,
        alignItems: 'center',
        color: '#00ff00',
       
        backgroundColor: '#0f0f0f',
    },
    container2: {
        flex: 2,
       zIndex: 0    ,
        backgroundColor: "transparent",
        borderRadius: Platform.OS === 'web' ? 8 : 47,
        borderColor: '#00aaff',
        borderWidth: 1,
       
        marginTop:10,
   
        width: '99%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
      
        zIndex: 2,
    },
});

export default ExploreScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ExploreScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore</Text>
            <View style={styles.container2}>
                <StatusBar hidden={true} />
            
            {/* Add your explore content here */}
            </View>
            {/* Add your explore content here */}
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
        borderColor: '#ffffff',
        borderWidth: 1,
        padding: 20,
        marginTop: -30,
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
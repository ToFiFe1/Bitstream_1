import React from 'react';
import { Platform } from 'react-native';
import { View, Text } from 'react-native';

function header() {
    return (
        <View
            style={{
            alignSelf: 'stretch',
            borderRadius: 20,
            padding: 13,
            
            width: '100%',
            backgroundColor: '#222',
            alignItems: 'center',
            ...(Platform.OS === 'ios'
                ? {
                top: -20,
                paddingVertical: 10,
                flexDirection: 'row',
                borderTopLeftRadius: 40,
            
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                alignSelf: 'flex-start',
                left: -20,
                alignItems: 'flex-start',
                borderRadius: undefined,
                }
                : {})
            }}
        >
            <Text style={{ margin: 0, color: '#fff', left:"-40%",fontSize: Platform.OS === 'ios' ? 16 : 20 }}>Bitstream</Text>
        </View>
    );
}

export default header;

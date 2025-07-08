import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          height: 60,
          borderTopWidth: 1,
          borderTopColor: '#eee',
          backgroundColor: '#fff',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: Platform.OS === 'ios',
          tabBarLabel: 'Home',
          // You can add tabBarIcon here if you want an icon
        }}
      />
      {/* Add more Tabs.Screen for other tabs if needed */}
    </Tabs>
  );
}

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Tabs>

            <Tabs.Screen 
                name="ChatList"
                options={{
                    title: 'Chats',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles" color={color} size={size} />
                    ),
                }} 
            />

            <Tabs.Screen 
                name="Home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}  
            />

            <Tabs.Screen 
                name="Challenges"
                options={{
                    title: 'Challenges',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="star" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen 
                name="Profile" 
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;
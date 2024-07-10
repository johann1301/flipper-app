import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';


const Page = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" options={{ title: 'Login' }} />
        <Stack.Screen 
            name="Signup"
            options={{
            title: 'Sign Up', 
            headerShown: true,
            headerStyle: {
                backgroundColor: '#2B2B2B',
            },
            headerTintColor: Colors.green,
            headerBackTitleVisible: false,
            }} 
        />
    </Stack>
  );
};

export default Page;
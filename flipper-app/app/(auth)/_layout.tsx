import { Stack } from 'expo-router';


const Page = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" options={{ title: 'Login' }} />
      <Stack.Screen name="Signup" options={{ title: 'Sign Up' }} />
    </Stack>
  );
};

export default Page;
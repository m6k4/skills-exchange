import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, RegistrationScreen } from './src/screens';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  // const { user } = useAuth();
  const user  = false;

  return (
      <Stack.Navigator>
        {user ? (
          <>
          <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
  );
}

export default StackNavigator;
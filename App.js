import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen4_a from './Screen4_a'
import Screen4_b from './Screen4_b'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="Screen4_a" component={Screen4_a} />
            <Stack.Screen name="Screen4_b" component={Screen4_b} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default App;

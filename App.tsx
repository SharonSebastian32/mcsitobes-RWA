// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalletScreen from './screens/WalletScreen';
import WalletDetailScreen from './screens/WalletDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Wallets"
          component={WalletScreen}
          options={{
            headerShown: true,
            headerTitle: 'My Wallets',
          }}
        />
        <Stack.Screen
          name="Details"
          component={WalletDetailScreen}
          options={{
            headerTitle: 'Wallet Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

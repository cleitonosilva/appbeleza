import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Signup2 from '../screens/Signup2';
import Preference from '../screens/Preference';
import Preference2 from '../screens/Preference2';
import InfoProfile from '../screens/InfoProfile';
import Document from '../screens/Document';
import BankAccount from '../screens/BankAccount';
import InfoProfile2 from '../screens/InfoProfile2';
import MainTab from '../stacks/MainTab'

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator initialRouteName="MainTab" screenOptions={{headerShown: false,}}>

      <Stack.Screen name="Preload" component={Preload} options={{headerShown: false,}} />
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false,}} />
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false,}} />
      <Stack.Screen name="Signup2" component={Signup2} options={{headerShown: false,}} />
      <Stack.Screen name="Preference" component={Preference} options={{headerShown: false,}} />
      <Stack.Screen name="Preference2" component={Preference2} options={{headerShown: false,}} />
      <Stack.Screen name="InfoProfile" component={InfoProfile} options={{headerShown: false,}} />
      <Stack.Screen name="Document" component={Document} options={{headerShown: false,}} />
      <Stack.Screen name="BankAccount" component={BankAccount} options={{headerShown: false,}} />
      <Stack.Screen name="InfoProfile2" component={InfoProfile2} options={{headerShown: false,}} />
      <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false,}} />



    </Stack.Navigator>
  );
};

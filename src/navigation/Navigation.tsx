import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screen/welcome';
import InstrumentListScreen from '../screen/instrumentList';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="InstrumentList" component={InstrumentListScreen} />
    </Stack.Navigator>
  );
};

export default memo(Navigation);

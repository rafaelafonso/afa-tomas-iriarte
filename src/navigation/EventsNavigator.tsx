/**
 * Navegador de la sección Eventos
 * Stack para lista de eventos y detalle
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventsListScreen, EventDetailScreen } from '../screens';
import { EventsStackParamList } from '../types';
import { colors } from '../theme';

const Stack = createNativeStackNavigator<EventsStackParamList>();

export const EventsNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.textInverse,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen
        name="EventsList"
        component={EventsListScreen}
        options={{ title: 'Eventos' }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{ title: 'Detalle del evento' }}
      />
    </Stack.Navigator>
  );
};

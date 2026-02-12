/**
 * Navegador de la sección Área de Socios
 * Gestiona la navegación entre login y área protegida
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, MembersAreaScreen } from '../screens';
import { useAuth } from '../contexts';
import { MembersStackParamList } from '../types';
import { colors } from '../theme';

const Stack = createNativeStackNavigator<MembersStackParamList>();

export const MembersNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();

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
      {isAuthenticated ? (
        <Stack.Screen
          name="MembersArea"
          component={MembersAreaScreen}
          options={{ title: 'Área de Socios' }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Iniciar sesión' }}
        />
      )}
    </Stack.Navigator>
  );
};

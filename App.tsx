/**
 * AFA Tomás de Iriarte
 * Aplicación móvil para la Asociación de Familias del Alumnado
 * del Colegio Tomás de Iriarte (Puerto de la Cruz, Tenerife)
 *
 * @version 1.0.0
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigator } from './src/navigation';
import { AuthProvider } from './src/contexts';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <MainNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

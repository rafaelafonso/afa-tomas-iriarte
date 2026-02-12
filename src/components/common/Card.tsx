/**
 * Componente Card
 * Tarjeta reutilizable para mostrar contenido
 */

import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius } from '../../theme';

interface CardProps {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, onPress, style }) => {
  if (onPress) {
    return (
      <TouchableOpacity
        style={[styles.card, style]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[styles.card, style]}>{children}</View>;
};

// Subcomponentes para estructura de la tarjeta
interface CardTitleProps {
  children: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

interface CardContentProps {
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <View style={styles.content}>{children}</View>
);

interface CardTextProps {
  children: string;
  secondary?: boolean;
}

export const CardText: React.FC<CardTextProps> = ({ children, secondary }) => (
  <Text style={[styles.text, secondary && styles.textSecondary]}>{children}</Text>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  content: {
    marginTop: spacing.sm,
  },
  text: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  textSecondary: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});

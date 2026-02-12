/**
 * Pantalla de detalle de evento
 * Muestra información completa de un evento
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen, Button } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';
import { getEventById } from '../../data/mockData';
import { EventsStackParamList } from '../../types';

type EventDetailScreenProps = NativeStackScreenProps<EventsStackParamList, 'EventDetail'>;

export const EventDetailScreen: React.FC<EventDetailScreenProps> = ({ route }) => {
  const { eventId } = route.params;
  const event = getEventById(eventId);

  // Formatea la fecha para mostrarla de forma legible
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (!event) {
    return (
      <Screen>
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Evento no encontrado</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen scrollable>
      <Text style={styles.title}>{event.title}</Text>

      {/* Información del evento */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>📅</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Fecha</Text>
            <Text style={styles.infoValue}>{formatDate(event.date)}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>🕐</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Hora</Text>
            <Text style={styles.infoValue}>{event.time}h</Text>
          </View>
        </View>

        <View style={[styles.infoRow, styles.lastInfoRow]}>
          <Text style={styles.infoIcon}>📍</Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Lugar</Text>
            <Text style={styles.infoValue}>{event.location}</Text>
          </View>
        </View>
      </View>

      {/* Descripción completa */}
      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.description}>{event.fullDescription}</Text>

      {/* Botón de acción (placeholder para futuras funcionalidades) */}
      <View style={styles.actionContainer}>
        <Button
          title="Inscribirse (próximamente)"
          onPress={() => {
            // Funcionalidad futura
          }}
          disabled
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  infoCard: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  lastInfoRow: {
    borderBottomWidth: 0,
  },
  infoIcon: {
    fontSize: 20,
    marginRight: spacing.md,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    color: colors.text,
    textTransform: 'capitalize',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  actionContainer: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    color: colors.textSecondary,
    fontSize: 16,
  },
});

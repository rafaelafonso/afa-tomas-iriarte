/**
 * Pantalla de listado de eventos
 * Muestra los próximos eventos organizados por la AFA
 */

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screen, Card, CardTitle, CardText } from '../../components';
import { colors, spacing } from '../../theme';
import { mockEvents } from '../../data/mockData';
import { EventsStackParamList, Event } from '../../types';

type EventsListScreenNavigationProp = NativeStackNavigationProp<
  EventsStackParamList,
  'EventsList'
>;

interface EventsListScreenProps {
  navigation: EventsListScreenNavigationProp;
}

export const EventsListScreen: React.FC<EventsListScreenProps> = ({ navigation }) => {
  // Formatea la fecha para mostrarla de forma legible
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  };

  const renderEventItem = ({ item }: { item: Event }) => (
    <Card onPress={() => navigation.navigate('EventDetail', { eventId: item.id })}>
      <View style={styles.dateContainer}>
        <Text style={styles.eventDate}>{formatDate(item.date)}</Text>
        <Text style={styles.eventTime}>{item.time}h</Text>
      </View>
      <CardTitle>{item.title}</CardTitle>
      <View style={styles.locationRow}>
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <CardText secondary>{item.description}</CardText>
    </Card>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay eventos programados</Text>
    </View>
  );

  return (
    <Screen padded={false}>
      <FlatList
        data={mockEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Próximos eventos</Text>
        }
        ListEmptyComponent={renderEmptyList}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: spacing.md,
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  eventDate: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  eventTime: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  locationIcon: {
    fontSize: 12,
    marginRight: spacing.xs,
  },
  location: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 16,
  },
});

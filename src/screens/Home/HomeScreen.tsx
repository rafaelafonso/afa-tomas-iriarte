/**
 * Pantalla principal (Home)
 * Muestra las últimas noticias y novedades de la AFA
 */

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screen, Card, CardTitle, CardText, Badge } from '../../components';
import { colors, spacing } from '../../theme';
import { mockNews } from '../../data/mockData';
import { HomeStackParamList, News } from '../../types';

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // Formatea la fecha para mostrarla de forma legible
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const renderNewsItem = ({ item }: { item: News }) => (
    <Card onPress={() => navigation.navigate('NewsDetail', { newsId: item.id })}>
      <View style={styles.cardHeader}>
        <Badge
          label={item.type === 'news' ? 'Noticia' : 'Novedad'}
          variant={item.type === 'news' ? 'primary' : 'accent'}
        />
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <CardTitle>{item.title}</CardTitle>
      <CardText secondary>{item.summary}</CardText>
    </Card>
  );

  return (
    <Screen padded={false}>
      {/* Cabecera */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AFA Tomás de Iriarte</Text>
        <Text style={styles.headerSubtitle}>Puerto de la Cruz, Tenerife</Text>
      </View>

      {/* Lista de noticias */}
      <FlatList
        data={mockNews}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Últimas noticias y novedades</Text>
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textInverse,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textInverse,
    opacity: 0.8,
    marginTop: spacing.xs,
  },
  listContent: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  date: {
    fontSize: 12,
    color: colors.textLight,
  },
});

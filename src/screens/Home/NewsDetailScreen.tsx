/**
 * Pantalla de detalle de noticia
 * Muestra el contenido completo de una noticia o novedad
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen, Badge } from '../../components';
import { colors, spacing } from '../../theme';
import { getNewsById } from '../../data/mockData';
import { HomeStackParamList } from '../../types';

type NewsDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'NewsDetail'>;

export const NewsDetailScreen: React.FC<NewsDetailScreenProps> = ({ route }) => {
  const { newsId } = route.params;
  const news = getNewsById(newsId);

  // Formatea la fecha para mostrarla de forma legible
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (!news) {
    return (
      <Screen>
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Noticia no encontrada</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen scrollable>
      <View style={styles.header}>
        <Badge
          label={news.type === 'news' ? 'Noticia' : 'Novedad'}
          variant={news.type === 'news' ? 'primary' : 'accent'}
        />
        <Text style={styles.date}>{formatDate(news.date)}</Text>
      </View>

      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.content}>{news.summary}</Text>

      {/* Placeholder para contenido futuro más extenso */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>
          Contenido completo de la noticia próximamente disponible.
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  date: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  content: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  placeholder: {
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.md,
    borderRadius: 8,
    marginTop: spacing.md,
  },
  placeholderText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
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

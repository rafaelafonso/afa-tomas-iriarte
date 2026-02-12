/**
 * Pantalla del Área de Socios
 * Contenido exclusivo para usuarios autenticados
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Button, Card, CardTitle } from '../../components';
import { useAuth } from '../../contexts';
import { colors, spacing, borderRadius } from '../../theme';

export const MembersAreaScreen: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Screen scrollable>
      {/* Saludo al usuario */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Hola,</Text>
        <Text style={styles.userName}>{user?.name}</Text>
      </View>

      {/* Contenido placeholder */}
      <Card>
        <CardTitle>Área en desarrollo</CardTitle>
        <Text style={styles.placeholderText}>
          Esta sección está en construcción. Próximamente podrás acceder a:
        </Text>
        <View style={styles.featureList}>
          <Text style={styles.featureItem}>• Documentos y actas de reuniones</Text>
          <Text style={styles.featureItem}>• Estado de tu cuota de socio</Text>
          <Text style={styles.featureItem}>• Inscripción a eventos exclusivos</Text>
          <Text style={styles.featureItem}>• Descuentos y ventajas para socios</Text>
          <Text style={styles.featureItem}>• Comunicación directa con la junta</Text>
        </View>
      </Card>

      {/* Información de la cuenta */}
      <Card>
        <CardTitle>Tu cuenta</CardTitle>
        <View style={styles.accountInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estado:</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Socio activo</Text>
            </View>
          </View>
        </View>
      </Card>

      {/* Botón de cerrar sesión */}
      <Button
        title="Cerrar sesión"
        onPress={logout}
        variant="outline"
        style={styles.logoutButton}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcomeSection: {
    marginBottom: spacing.lg,
  },
  welcomeText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textTransform: 'capitalize',
  },
  placeholderText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 22,
  },
  featureList: {
    marginTop: spacing.sm,
  },
  featureItem: {
    fontSize: 14,
    color: colors.text,
    marginBottom: spacing.xs,
    lineHeight: 22,
  },
  accountInfo: {
    marginTop: spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  infoValue: {
    fontSize: 14,
    color: colors.text,
  },
  statusBadge: {
    backgroundColor: colors.success,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  statusText: {
    color: colors.textInverse,
    fontSize: 12,
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },
});

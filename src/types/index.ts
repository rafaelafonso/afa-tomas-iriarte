/**
 * Tipos compartidos de la aplicación AFA Tomás de Iriarte
 */

// Tipo para noticias del Home
export interface News {
  id: string;
  title: string;
  summary: string;
  date: string;
  type: 'news' | 'update';
}

// Tipo para eventos
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullDescription: string;
}

// Tipo para el usuario autenticado
export interface User {
  id: string;
  email: string;
  name: string;
}

// Tipos para la navegación
export type RootTabParamList = {
  HomeTab: undefined;
  EventsTab: undefined;
  MembersTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  NewsDetail: { newsId: string };
};

export type EventsStackParamList = {
  EventsList: undefined;
  EventDetail: { eventId: string };
};

export type MembersStackParamList = {
  Login: undefined;
  MembersArea: undefined;
};

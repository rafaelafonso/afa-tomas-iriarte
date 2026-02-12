/**
 * Datos mockeados para desarrollo
 * En el futuro estos datos vendrán de una API o base de datos
 */

import { News, Event } from '../types';

export const mockNews: News[] = [
  {
    id: '1',
    title: 'Nuevo curso de actividades extraescolares',
    summary: 'Ya están abiertas las inscripciones para las actividades extraescolares del segundo trimestre.',
    date: '2026-02-01',
    type: 'news',
  },
  {
    id: '2',
    title: 'Actualización del comedor escolar',
    summary: 'Se ha renovado el menú del comedor con opciones más saludables y variadas.',
    date: '2026-01-28',
    type: 'update',
  },
  {
    id: '3',
    title: 'Reunión general de familias',
    summary: 'Convocatoria para la próxima asamblea general de la AFA.',
    date: '2026-01-25',
    type: 'news',
  },
  {
    id: '4',
    title: 'Nuevo sistema de comunicación',
    summary: 'Implementamos una nueva app para mejorar la comunicación entre familias y el centro.',
    date: '2026-01-20',
    type: 'update',
  },
  {
    id: '5',
    title: 'Carnaval escolar 2026',
    summary: 'Preparativos para la celebración del carnaval en el colegio.',
    date: '2026-01-15',
    type: 'news',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Asamblea General AFA',
    date: '2026-02-15',
    time: '17:00',
    location: 'Salón de actos del colegio',
    description: 'Reunión anual de todas las familias asociadas.',
    fullDescription: 'La Asamblea General Ordinaria de la AFA del Colegio Tomás de Iriarte se celebrará el próximo 15 de febrero. En esta reunión se tratarán los siguientes puntos:\n\n1. Lectura y aprobación del acta anterior\n2. Memoria de actividades del curso\n3. Balance económico\n4. Propuestas para el próximo trimestre\n5. Ruegos y preguntas\n\nEs importante la asistencia de todas las familias socias para la toma de decisiones.',
  },
  {
    id: '2',
    title: 'Carnaval Escolar',
    date: '2026-02-28',
    time: '10:00',
    location: 'Patio del colegio',
    description: 'Celebración del carnaval con disfraces y actividades.',
    fullDescription: 'Un año más celebramos el Carnaval en nuestro colegio. Este año la temática será "Cuentos tradicionales canarios".\n\nActividades programadas:\n- 10:00 - Concentración en el patio\n- 10:30 - Desfile de disfraces por cursos\n- 11:30 - Baile de la batucada\n- 12:00 - Entrega de premios\n- 12:30 - Fin de la jornada\n\nLa AFA ofrecerá un pequeño refrigerio para todos los participantes.',
  },
  {
    id: '3',
    title: 'Taller de manualidades',
    date: '2026-03-05',
    time: '16:30',
    location: 'Aula de plástica',
    description: 'Taller familiar de manualidades para el Día de Canarias.',
    fullDescription: 'Organizamos un taller de manualidades donde padres e hijos podrán crear juntos elementos decorativos tradicionales canarios.\n\nMateriales incluidos. Plazas limitadas a 20 familias.\n\nInscripciones abiertas hasta el 1 de marzo en la secretaría del colegio o a través de esta aplicación (próximamente).',
  },
  {
    id: '4',
    title: 'Excursión familiar al Teide',
    date: '2026-03-15',
    time: '08:00',
    location: 'Puerta principal del colegio',
    description: 'Excursión para familias al Parque Nacional del Teide.',
    fullDescription: 'Excursión organizada por la AFA al Parque Nacional del Teide.\n\nIncluye:\n- Transporte en guagua\n- Guía oficial del parque\n- Ruta adaptada para niños\n- Almuerzo tipo picnic\n\nPrecio: 15€ adultos, 8€ niños\n\nPunto de encuentro: Puerta principal del colegio a las 8:00\nHora prevista de regreso: 18:00\n\nInscripciones hasta el 10 de marzo.',
  },
];

// Función helper para obtener un evento por ID
export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

// Función helper para obtener una noticia por ID
export const getNewsById = (id: string): News | undefined => {
  return mockNews.find(news => news.id === id);
};

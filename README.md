# AFA Tomás de Iriarte

Mobile application for the Parent-Teacher Association (AFA) of Colegio Tomás de Iriarte in Puerto de la Cruz, Tenerife, Spain.

Built with React Native, Expo, and TypeScript for iOS, Android, and Web.

## Features

- **Home**: Latest news and updates from the AFA
- **Events**: List of upcoming events with detailed information
- **Members Area**: Protected section for registered members with authentication

## Tech Stack

- **Framework**: React Native with Expo SDK 54
- **Language**: TypeScript
- **Navigation**: React Navigation 7 (Bottom Tabs + Native Stack)
- **State Management**: React Context API
- **Styling**: React Native StyleSheet
- **Platforms**: iOS, Android, Web

## Prerequisites

- Node.js 18+ (20+ recommended)
- npm or yarn
- For iOS: macOS with Xcode
- For Android: Android Studio with emulator
- Expo Go app (optional, for testing on physical devices)

## Installation

```bash
# Clone the repository
git clone https://github.com/rafaelafonso/afa-tomas-iriarte.git
cd afa-tomas-iriarte

# Install dependencies
npm install
```

## Running the App

### Development Server

```bash
# Start the development server (interactive menu)
npm start

# Or use platform-specific commands:
npm run ios        # iOS simulator (auto-detect)
npm run android    # Android emulator (auto-detect)
npm run web        # Web browser
```

### Specific Devices

```bash
# iOS - iPhone 17 Pro
npm run ios:sim

# Android - Pixel 8 Pro
npm run android:pixel
```

### Utility Commands

```bash
# Stop Expo server
npm run stop

# Stop Android emulator
npm run stop:android

# Clean and reinstall dependencies
npm run clean
```

## Project Structure

```
src/
├── components/          # Reusable components
│   └── common/         # Common UI components (Button, Card, Screen, etc.)
├── contexts/           # React contexts (Authentication)
├── data/               # Mock data (temporary, will be replaced with API)
├── navigation/         # Navigation configuration
│   ├── MainNavigator.tsx       # Bottom tabs
│   ├── HomeNavigator.tsx       # Home stack
│   ├── EventsNavigator.tsx     # Events stack
│   └── MembersNavigator.tsx    # Members area stack
├── screens/            # Screen components
│   ├── Home/          # Home and news screens
│   ├── Events/        # Events list and detail screens
│   └── Members/       # Login and members area screens
├── theme/             # Theme configuration (colors, spacing)
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Architecture

The app follows a **feature-based modular architecture**:

- **Clean separation of concerns**: Components, screens, navigation, and business logic are clearly separated
- **Context API for state management**: Simple and sufficient for current scope, easily extendable
- **TypeScript**: Strong typing for better developer experience and fewer runtime errors
- **Scalable structure**: Easy to add new features by creating new folders in the appropriate directories

## Authentication

Currently using **simulated authentication** for development purposes. Any valid email format and non-empty password will grant access to the Members Area.

**Future**: Will be connected to a real backend (Firebase, Supabase, or custom API).

## Data

Currently using **mock data** stored in `src/data/mockData.ts`.

**Future**: Will be fetched from a backend API.

## Compatibility Notes

### Node.js Version

The project includes polyfills for Node.js 18 compatibility (`Array.toReversed`). However, **Node.js 20+** is recommended for optimal performance.

To update Node.js:
```bash
# Using nvm (recommended)
nvm install 20
nvm use 20

# Or download from nodejs.org
```

## Color Scheme

- **Primary**: `#1E3A5F` (Dark blue - institutional)
- **Secondary**: `#4A90D9` (Light blue)
- **Accent**: `#F5A623` (Yellow/gold)

## Roadmap

- [ ] Connect to real backend/API
- [ ] Session persistence with `expo-secure-store`
- [ ] Push notifications with `expo-notifications`
- [ ] Event registration functionality
- [ ] Payment integration for membership fees
- [ ] Photo gallery for past events
- [ ] Document access (meeting minutes, official documents)
- [ ] Replace emoji icons with `@expo/vector-icons`
- [ ] Add unit and integration tests
- [ ] CI/CD with EAS Build

## Development

### Adding New Features

1. Create screen components in `src/screens/[FeatureName]/`
2. Add navigation in `src/navigation/`
3. Create reusable components in `src/components/`
4. Define types in `src/types/`
5. Update mock data in `src/data/` (temporary)

### Code Style

- Use TypeScript for all new files
- Follow existing component patterns
- Keep components focused and single-purpose
- Use functional components with hooks
- Add comments for complex logic

## Contributing

This is a private project for Colegio Tomás de Iriarte. If you're part of the development team, please follow the contribution guidelines:

1. Create a feature branch
2. Make your changes
3. Test on all platforms (iOS, Android, Web)
4. Submit a pull request

## License

Private project - All rights reserved.

## Contact

For questions or support, contact the AFA at Colegio Tomás de Iriarte.

---

Built with ❤️ for the families of Colegio Tomás de Iriarte

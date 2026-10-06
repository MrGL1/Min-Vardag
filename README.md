# Min Vardag

Min Vardag är en mobilapp skapad med React Native, Expo och TypeScript.

Appen hjälper användaren att planera sin vardag genom att lägga till aktiviteter med datum och tid i ett enkelt schema. Tanken är att användaren enkelt ska kunna hålla koll på saker som behöver göras och när de ska göras.

## Funktioner

- Lägg till en aktivitet.
- Ange datum för aktiviteten.
- Ange tid för aktiviteten.
- Visa den tillagda aktiviteten i ett enkelt schema.
- Navigera mellan olika sidor med Expo Router.
- Visa en detaljsida för aktiviteter.
- Hämta användarens position.
- Kopiera namnet på en aktivitet.
- Visa enhetens batterinivå.
- Ge haptisk feedback vid interaktion.

## Teknik

Projektet är byggt med:

- React Native
- Expo
- TypeScript
- Expo Router

## React Native-komponenter

I projektet används bland annat följande React Native-komponenter:

- `View`
- `Text`
- `Pressable`
- `TextInput`
- `FlatList`

## Expo SDK-moduler

Projektet använder fyra Expo SDK-moduler.

### Expo Haptics

`expo-haptics` används för att ge haptisk feedback när användaren interagerar med appen.

### Expo Location

`expo-location` används för att fråga efter platsbehörighet och hämta användarens aktuella position.

### Expo Clipboard

`expo-clipboard` används för att kopiera namnet på en aktivitet.

### Expo Battery

`expo-battery` används för att hämta enhetens aktuella batterinivå.

## Navigering

Appen använder Expo Router för navigering mellan olika sidor.

Exempel på routes som finns i projektet:

- `/` – startsidan där användarens schema visas.
- `/lagg-till` – formulär där användaren kan lägga till en aktivitet med datum och tid.
- `/sysslor` – sida med aktiviteter som skapades under utvecklingen av appen.
- `/detaljer/[id]` – dynamisk detaljsida där information skickas med hjälp av en parameter.

Den dynamiska routen `[id]` används för att läsa en parameter med `useLocalSearchParams`.

## Installation

Installera projektets dependencies:

```bash
npm install
```

Starta sedan Expo:

```bash
npx expo start
```

Appen kan därefter köras på en mobil enhet med Expo Go eller i webbläsaren.

## Projektstruktur

De viktigaste sidorna finns i:

```text
src/app/
```

Exempel:

```text
src/app/
├── index.tsx
├── lagg-till.tsx
├── sysslor.tsx
└── detaljer/
    └── [id].tsx
```

## Syfte

Syftet med Min Vardag är att skapa en enkel app som hjälper användaren att strukturera sin vardag och komma ihåg planerade aktiviteter.

Projektet visar samtidigt användning av centrala delar av React Native och Expo, bland annat komponenter, `useState`, formulär, navigering, parametrar, dynamiska routes och Expo SDK-moduler.
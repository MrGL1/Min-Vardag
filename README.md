# Min Vardag

Min Vardag är en mobilapp skapad med React Native, Expo och TypeScript.

Appen hjälper användaren att planera sin vardag genom att lägga till en syssla med datum och tid. Användaren kan även välja mellan olika typer av sysslor och öppna en detaljsida för en vald syssla.

## Funktioner

- Lägg till en syssla.
- Ange datum för sysslan.
- Ange tid för sysslan.
- Visa den tillagda sysslan i ett enkelt schema.
- Visa olika sysslor, exempelvis Städa, Träna, Plugga och Promenad.
- Navigera mellan olika sidor med Expo Router.
- Öppna en detaljsida för en vald syssla.
- Hämta användarens position.
- Kopiera namnet på en syssla.
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

Projektet använder följande Expo SDK-moduler:

### Expo Haptics

`expo-haptics` används för att ge haptisk feedback när användaren interagerar med appen.

### Expo Location

`expo-location` används för att fråga efter platsbehörighet och hämta användarens aktuella position.

### Expo Clipboard

`expo-clipboard` används för att kopiera namnet på en vald syssla.

### Expo Battery

`expo-battery` används för att hämta enhetens aktuella batterinivå.

## Navigering

Appen använder Expo Router för navigering.

Exempel på sidor i appen:

- `/` – startsidan med schemat.
- `/sysslor` – visar en lista med sysslor.
- `/lagg-till` – formulär för att lägga till en syssla.
- `/detaljer/[id]` – dynamisk detaljsida för en vald syssla.

Den dynamiska routen `[id]` används för att skicka information om vilken syssla användaren har valt.

## Installation

Klona projektet och installera dependencies:

```bash
npm install
```

Starta sedan Expo:

```bash
npx expo start
```

Appen kan därefter köras med exempelvis Expo Go eller i webbläsaren.

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

Syftet med projektet är att skapa en enkel vardagsapp där användaren kan planera aktiviteter och samtidigt använda centrala delar av React Native och Expo, såsom komponenter, state, navigering, dynamiska routes och Expo SDK-moduler.
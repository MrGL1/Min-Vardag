# Min Vardag

Min Vardag är en mobilapp skapad med React Native, Expo och TypeScript.

Appen hjälper användaren att planera sin vardag genom att lägga till aktiviteter med datum och tid i ett enkelt schema. Användaren kan lägga till flera aktiviteter som sparas lokalt på enheten och finns kvar när användaren navigerar mellan appens sidor.

## Funktioner

- Lägg till flera aktiviteter.
- Ange datum för varje aktivitet.
- Ange tid för varje aktivitet.
- Visa aktiviteterna i ett enkelt schema.
- Spara aktiviteter lokalt på enheten.
- Ta bort aktiviteter från schemat.
- Kopiera namnet på en aktivitet.
- Få en lokal notis efter att en aktivitet har lagts till.
- Få haptisk feedback när en aktivitet läggs till.
- Hålla appen i stående skärmläge.
- Navigera mellan startsidan och formuläret med Expo Router.

## Teknik

Projektet är byggt med:

- React Native
- Expo
- TypeScript
- Expo Router
- AsyncStorage

## React Native-komponenter

I projektet används bland annat följande React Native-komponenter:

- `View`
- `Text`
- `Pressable`
- `TextInput`

## State och lagring

React `useState` används för att hantera aktiviteterna som visas på startsidan.

Aktiviteterna sparas lokalt med `@react-native-async-storage/async-storage`. När användaren lägger till en ny aktivitet hämtas de tidigare sparade aktiviteterna och den nya aktiviteten läggs till i listan.

När startsidan öppnas hämtas de sparade aktiviteterna från AsyncStorage och visas i schemat.

Användaren kan även ta bort en aktivitet. Då uppdateras både listan på skärmen och den sparade listan i AsyncStorage.

## Expo SDK-moduler

Projektet använder fyra Expo SDK-moduler.

### Expo Notifications

`expo-notifications` används för att skicka en lokal påminnelse när användaren har lagt till en aktivitet.

I den nuvarande versionen skickas påminnelsen några sekunder efter att aktiviteten har lagts till.

### Expo Haptics

`expo-haptics` används för att ge haptisk feedback när användaren trycker på knappen för att lägga till en aktivitet.

### Expo Clipboard

`expo-clipboard` används för att kopiera namnet på en aktivitet till enhetens urklipp.

### Expo Screen Orientation

`expo-screen-orientation` används för att hålla appen i stående skärmläge.

## Navigering

Appen använder Expo Router för navigering mellan sidorna.

Projektet har två huvudsakliga routes:

- `/` – startsidan där användarens sparade aktiviteter visas.
- `/lagg-till` – formuläret där användaren skriver aktivitet, datum och tid.

När användaren lägger till en aktivitet sparas den med AsyncStorage. Därefter navigerar appen tillbaka till startsidan där aktiviteterna visas.

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

Vissa mobilfunktioner, exempelvis haptisk feedback och notiser, testas bäst på en fysisk mobil enhet.

## Projektstruktur

De viktigaste sidorna finns i:

```text
src/app/
```

Exempel:

```text
src/app/
├── index.tsx
└── lagg-till.tsx
```

`index.tsx` innehåller startsidan. Där hämtas och visas de sparade aktiviteterna. Användaren kan även kopiera eller ta bort en aktivitet.

`lagg-till.tsx` innehåller formuläret där användaren kan lägga till en ny aktivitet med datum och tid. Här sparas aktiviteten med AsyncStorage och appens notis och haptiska feedback aktiveras.

## Syfte

Syftet med Min Vardag är att skapa en enkel app som hjälper användaren att strukturera sin vardag och komma ihåg planerade aktiviteter.

Projektet visar samtidigt användning av centrala delar av React Native och Expo, bland annat komponenter, `useState`, `useEffect`, formulär, arrayer, navigering, lokal lagring och Expo SDK-moduler.
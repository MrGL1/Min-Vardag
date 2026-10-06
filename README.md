# Min Vardag

Min Vardag är en mobilapp skapad med React Native, Expo och TypeScript.

Appen hjälper användaren att planera sin vardag genom att lägga till aktiviteter med datum och tid i ett enkelt schema. Tanken är att användaren enkelt ska kunna hålla koll på saker som behöver göras och när de ska göras.

## Funktioner

- Lägg till en aktivitet.
- Ange datum för aktiviteten.
- Ange tid för aktiviteten.
- Visa den tillagda aktiviteten i ett enkelt schema.
- Få en påminnelse genom en lokal notis.
- Få haptisk feedback när en aktivitet läggs till.
- Kopiera namnet på en aktivitet.
- Appen hålls i stående skärmläge.
- Navigera mellan startsidan och formuläret med Expo Router.

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

- `/` – startsidan där användarens schema visas.
- `/lagg-till` – formuläret där användaren skriver aktivitet, datum och tid.

När användaren lägger till en aktivitet skickas informationen tillbaka till startsidan och visas i schemat.

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

`index.tsx` innehåller startsidan och schemat.

`lagg-till.tsx` innehåller formuläret där användaren kan lägga till en ny aktivitet.

## Syfte

Syftet med Min Vardag är att skapa en enkel app som hjälper användaren att strukturera sin vardag och komma ihåg planerade aktiviteter.

Projektet visar samtidigt användning av centrala delar av React Native och Expo, bland annat komponenter, `useState`, formulär, navigering och Expo SDK-moduler.
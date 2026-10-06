# Min Vardag

Min Vardag är en mobilapp skapad med React Native, Expo och TypeScript.

Appen hjälper användaren att planera sin vardag genom att lägga till aktiviteter med datum och tid i ett enkelt schema. Användaren kan lägga till flera aktiviteter som sparas lokalt på enheten.

## Funktioner

- Lägg till flera aktiviteter.
- Ange datum och tid för varje aktivitet.
- Visa aktiviteter i ett schema.
- Spara aktiviteter lokalt på enheten.
- Ta bort aktiviteter.
- Kopiera namnet på en aktivitet.
- Få en lokal notis när en aktivitet har lagts till.
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

Projektet använder minst fyra komponenter från React Native:

- `View` – används för att strukturera och gruppera innehåll på skärmarna.
- `Text` – används för rubriker, aktivitetsinformation och knapptexter.
- `Pressable` – används för knappar, exempelvis Lägg till, Kopiera aktivitet och Ta bort.
- `TextInput` – används för att skriva aktivitet, datum och tid.

## State och lokal lagring

React `useState` används för att hantera aktiviteterna som visas på startsidan och värdena i formuläret.

Aktiviteterna sparas lokalt med `@react-native-async-storage/async-storage`.

När användaren lägger till en aktivitet hämtas de tidigare sparade aktiviteterna från AsyncStorage. Den nya aktiviteten läggs till i listan och hela listan sparas igen.

När startsidan öppnas hämtas aktiviteterna från AsyncStorage och visas i schemat.

När en aktivitet tas bort uppdateras både React state och informationen i AsyncStorage.

## Expo SDK-moduler

Projektet använder fyra Expo SDK-moduler:

### Expo Notifications

`expo-notifications` används för att skapa en lokal påminnelse när användaren lägger till en aktivitet.

I den nuvarande versionen visas notisen några sekunder efter att aktiviteten har lagts till.

### Expo Haptics

`expo-haptics` används för att ge haptisk feedback när användaren trycker på knappen för att lägga till en aktivitet.

### Expo Clipboard

`expo-clipboard` används för att kopiera namnet på en aktivitet till enhetens urklipp.

### Expo Screen Orientation

`expo-screen-orientation` används för att låsa appen till stående skärmläge.

## Navigering med Expo Router

Appen använder Expo Router för navigering.

Projektet har två huvudsakliga routes:

- `/` – startsidan där användarens aktiviteter visas.
- `/lagg-till` – formuläret där användaren kan lägga till en aktivitet.

När användaren trycker på **Lägg till Aktivitet** navigerar appen från startsidan till `/lagg-till`.

Startsidan skickar även parametern `titel`:

```tsx id="cn2gw4"
router.push({
  pathname: "/lagg-till",
  params: {
    titel: "Ny aktivitet"
  }
});
```

På `lagg-till.tsx` tas parametern emot med:

```tsx id="ajk17f"
const { titel } = useLocalSearchParams();
```

Parametern används sedan som rubrik på sidan.

När en aktivitet har lagts till och sparats navigerar appen tillbaka till startsidan.

## Installation och körning

### 1. Klona projektet

```bash id="zpx97u"
git clone https://github.com/MrGL1/Min-Vardag.git
```

### 2. Gå in i projektmappen

```bash id="as43wg"
cd Min-Vardag
```

### 3. Installera dependencies

```bash id="0kgufc"
npm install
```

### 4. Starta Expo

```bash id="14bbrd"
npx expo start
```

### 5. Starta appen

Öppna Expo Go på en mobil enhet och skanna QR-koden som visas av Expo.

Vissa funktioner, exempelvis haptisk feedback och lokala notiser, testas bäst på en fysisk mobil enhet.

## Projektstruktur

De viktigaste sidorna finns i:

```text id="upc6b7"
src/app/
├── index.tsx
└── lagg-till.tsx
```

`index.tsx` innehåller startsidan och schemat. Där hämtas och visas de sparade aktiviteterna. Användaren kan även kopiera eller ta bort en aktivitet.

`lagg-till.tsx` innehåller formuläret där användaren kan lägga till en ny aktivitet med datum och tid. Där används även Notifications, Haptics och AsyncStorage.

## Syfte

Syftet med Min Vardag är att skapa en enkel app som hjälper användaren att strukturera sin vardag och komma ihåg planerade aktiviteter.

Projektet har även gett mig möjlighet att arbeta praktiskt med React Native, TypeScript, state, formulär, arrayer, Expo Router, parametrar, lokal lagring och Expo SDK-moduler.

## Uppfyllda krav för godkänt

- [x] Minst 4 React Native-komponenter används.
- [x] Minst 4 Expo SDK-moduler används.
- [x] React Native-komponenterna och Expo SDK-modulerna är dokumenterade i README.
- [x] Expo Router används för navigering.
- [x] Minst en skärm tar emot en parameter med `useLocalSearchParams`.
- [x] Git och GitHub har använts under arbetets gång.
- [x] Projektet innehåller en README med beskrivning och instruktioner.
- [ ] Projektet är inlämnat via läroplattformen.
- [ ] Muntlig presentation är genomförd.
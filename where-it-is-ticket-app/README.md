# 🎵 Where it's @ – Ticketing made easy

Where it's @ är en frontend-applikation byggd i React där användare kan upptäcka och köpa biljetter till lokala musikevenemang.

## 🚀 Tekniker & Funktionalitet

Denna app är byggd med React och visar förståelse för följande tekniker:

-   📄 Pages & Components
-   🔁 `useState` & `useEffect`
-   📦 Propshantering
-   🔗 Routing med `react-router-dom`
-   📡 API-hantering med `axios`
-   🧠 Avancerad statehantering med `zustand`
-   🪄 Biljettgenerering med ID, sektion och säten
-   📱 Responsiv design (375px–500px)

## 📚 Externa bibliotek (utöver lektionsmaterial)

### 1. `swiper`

📌 **Användning:** Applicerade swiper för tickets och single tickets för att skapa en snygg och interaktiv karusell av biljetter.

🔍 **Hur det fungerar:** `Swiper` är ett kraftfullt bibliotek för touch-slider-komponenter. Genom att använda `<Swiper>` och `<SwiperSlide>` kan man enkelt loopa innehåll och få en mobilvänlig, swipebar vy.

🧠 **Varför det passar:** Perfekt för att visa flera biljetter på ett visuellt sätt, särskilt för mobilskärmar.

### 2. `uuid`

📌 **Användning:** Genererar unika ID:n för varje biljett vilket var användbar för att skapa order-id och ticket-id.

🔍 **Hur det fungerar:** `uuid` är ett enkelt bibliotek för att skapa unika identifikatorer genom att

🧠 **Varför det passar:** Säkerställer att varje biljett är unik och kan identifieras undviker dubbletter samt enkelt att skapa.

### 3. `react-barcode`

📌 **Användning:** Visuellt streckkodsgenerering till varje biljett i `SingleTicketPage`.

🔍 **Hur det fungerar:** Komponentbiblioteket `react-barcode` skapar streckkoder baserat på en sträng.

🧠 **Varför det passar:** Förhöjer realismen i biljettvisningen och ger en mer autentisk känsla.

### 4. `framer-motion`

📌 **Användning:** För animationer av ia

🔍 **Hur det fungerar:** framer-motion är ett animationsbibliotek för React som gör det enkelt att lägga till övergångar, fade-effekter och rörelse. Jag använde t.ex. motion.div för att skapa smidiga fade-in-effekter och övergångar mellan komponenter och sidor.

🧠 **Varför det passar:** Det gör upplevelsen mer levande och modern. Eftersom musik och evenemang handlar om energi och rörelse, lyfter framer-motion appens interaktivitet till en ny nivå.

## 🎨 Använda bibliotek i projektet

| Bibliotek          | Beskrivning                     |
| ------------------ | ------------------------------- |
| `axios`            | API-anrop                       |
| `zustand`          | Global statehantering           |
| `react-router-dom` | Routing mellan sidor            |
| `react-icons`      | Ikoner till navigation          |
| `uuid`             | Generera unika ID:n             |
| `swiper`           | Karusell för att visa biljetter |
| `react-barcode`    | Streckkoder till biljetter      |

## 📱 Responsiv Design

Appen är testad och fungerar för alla skärmstorlekar mellan **375px och 500px**, med särskilt fokus på mobilanvändning.

## 🛠 Struktur

Projektet är uppdelat i:

-   `Pages/` – Huvudsidor (Home, Events, Tickets, etc.)
-   `Components/` – Återanvändbara komponenter (NavBar, Header, Footer, etc.)
-   `Stores/` – Zustand stores
-   `Styles/` – CSS-filer för varje komponent/sida

---

## 📝 Att köra projektet lokalt

```bash
git clone https://github.com/ditt-konto/where-its-at.git
cd where-its-at
npm install
npm start

# React + Vite

Bibliotek
axios
zustand
react-router-dom
react-icons
uuid
swiper
react-barcode
framer-motion
```

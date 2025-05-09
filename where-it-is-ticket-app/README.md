# 🎵 Where it's @ – Boka biljetter på ett kick

Where it's @ är en frontend-applikation byggd i React där användare kan upptäcka och köpa biljetter till lokala musikevenemang.

## Tekniker & Funktionalitet

Denna app är byggd med React och visar förståelse för följande tekniker:

-   📄 Pages & Components
-   🔁 `useState` & `useEffect`
-   📦 Propshantering
-   🔗 Routing med `react-router-dom`
-   📡 API-hantering med `axios`
-   🧠 Avancerad statehantering med `zustand`
-   🪄 Biljettgenerering med ID, sektion och säten
-   📱 Responsiv design (375px–500px)

## Externa bibliotek

### 1. `swiper`

📌 **Användning:** Applicerade swiper för tickets och single tickets för att skapa en snygg och interaktiv karusell av biljetter.

❓ **Hur det fungerar:** `Swiper` är ett kraftfullt bibliotek för touch-slider-komponenter. Genom att använda `<Swiper>` och `<SwiperSlide>` kan man enkelt loopa innehåll och få en mobilvänlig, swipebar vy. Elementet swipern är föräldern där varje visning av slide är en Swiperslide.

🧠 **Varför det passar:** Perfekt för att visa flera biljetter på ett visuellt sätt, särskilt för mobilskärmar.

### 2. `uuid`

📌 **Användning:** Genererar unika ID:n för varje biljett vilket var användbar för att skapa order-id och ticket-id.

❓ **Hur det fungerar:** `uuid` är ett enkelt bibliotek för att skapa unika identifikatorer genom att skapa en import { v4 as uuidv4 } from 'uuid'. Jag gjorde avgränsning av koden genom att använda mig av slice för att korta ner det.

🧠 **Varför det passar:** Säkerställer att varje biljett är unik och kan identifieras undviker dubbletter samt enkelt att skapa.

### 3. `react-barcode`

📌 **Användning:** Visuellt streckkodsgenerering till varje biljett i `SingleTicketPage`.

❓ **Hur det fungerar:** Komponentbiblioteket `react-barcode` skapar streckkoder där man får lägga in den som en komponent och ange anger man ett value så skapas det en sträng som visar under streckkoden. Det går även att justera storleken på den genom width, height etc.

🧠 **Varför det passar:** Förhöjer realismen i biljettvisningen och ger en mer autentisk känsla.

### 4. `framer-motion`

📌 **Användning:** För animationer av olika element där jag applicerade detta på loggan. Jag använde t.ex. <motion.path> för att animera de olika delarna på loggan på landing page. I elementet så får man ange en initial med vad den kommer börja med, t ex rotate:180, sedan anges animate, t ex rotate: 0, därefter kan man lägga till en transition, t ex duration: 2, repeat: Infinity.

❓ **Hur det fungerar:** framer-motion är ett animationsbibliotek för React som gör det enkelt att lägga till övergångar, fade-effekter och rörelse. Man importerar { motion } från 'framer-motion' sedan applicerar man motion på olika element som man vill göra ändringar, t ex <motion.path>.

🧠 **Varför det passar:** Det gör appen mer levande och modern. Dessutom var det smidigare än att använda sig av CSS för att animera delarna.

### 5. `zustand`
📌 **Användning:** Hanterar global state, exempelvis lagring av events, cart och ordrar. Alla dessa fanns i mappen stores där varje store även hade möjlighet att ändra värdet på staten genom att anropa funktioner som addOrder, setEvents...

❓ **Hur det fungerar:** zustand är ett lättanvänt bibliotek för state management. Det använder en custom hook där man definierar sitt state och funktioner för att uppdatera det. State:et kan sedan nås från alla komponenter i appen utan att behöva skicka props.

🧠 **Varför det passar:** Gör det enkelt att hantera och dela data mellan olika sidor (pages), till exempel vilka biljetter användaren har lagt till order – utan att använda props.

### 6. `react-icons`
📌 **Användning:** Hämtning av ikoner från biblioteket där jag använde mig av igenkännbara ikoner i t ex navbaren.

❓ **Hur det fungerar:** react-icons samlar många populära ikonbibliotek i deras hemsida https://react-icons.github.io/react-icons/ där man kan göra en sökning efter en ikon. Sedan importerar man endast de ikoner man behöver, vilket gör det enkelt och effektivt att jobba med visuella symboler i gränssnittet. En import kan se ut såhär: import { RiShoppingBasketFill } from 'react-icons/ri';, information som man får från hemsidan.

🧠 **Varför det passar:** Ger en professionell och enhetlig stil med minimal kod. Ökar också användarvänligheten genom igenkännbara symboler.

## Att köra projektet lokalt

```bash
git clone https://github.com/ditt-konto/where-its-at.git
cd where-its-at
npm install
npm start

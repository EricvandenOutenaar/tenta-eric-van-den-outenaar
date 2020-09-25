**Reading guide.**

In the following document you will first find some installing instructions. After that you can read my conclusions concerning the different technologies that we discussed in our course for making dynamic websites. That part will be in Swedish.

**Clone the Github repo and install the Gatsby site.**

    Go via your command line to your project folder where you want to install this project.

    Write:

    Gatsby new [give the folder a name!] https://github.com/EricvandenOutenaar/tenta-eric-van-den-outenaar.git && cd [the name of that folder] && code .

    This will clone my repo into your folder, install this gatsby project and open up visual studio code. If you don't use Visual Studio forget the last part of the commando (code . ) and just open the project with your specific code editor.

    Once your code editor opens, run Gatsby develop to start the development server and show to site on your local host in your browser. If you for some  reason would encounter problems. Please run a gatsby clean followed by an npm install from the terminal to make sure all the packages from the JSON files are correctly installed.

2.  **Mina slutsatser**

”Se samband och värdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser”

Eric van den Outenaar

Snygga dropdown-menyer, snabba uppdateringar av online varukorgar och animations som dyker upp eller försvinner beroende på skärmstorlekar, webbsidor har blivit allt mer dynamiskt. Mer dynamiskt betyder inte bara en bättre användarupplevelse men också mer komplexitet för oss webbutvecklare. Hur hanterar vi komplexiteten? Och hur väljer man rätt programmeringsteknik? Frågor som har blivit allt mer aktuella.

Det är tydligt att de ’vanliga’ webutvecklingsteknikerna, som HTML, CSS och ’vanilla’ (pre-ES6) JavaScript, verkar inte längre tillräckligt bra på att helt självständigt lösa våra utvecklingsproblem. Vi kan inte lita på ett litet ’script’ och ’event handlar’ här och några CSS-klasser och html-filer där. Vi kan inte ’hacka’ igenom varje webbutvecklingsproblem med de teknikerna längre, särskilt när man bygger krävande webapplikationer där man måste hantera ett komplext flöde av data, användarsessions och användarinteraktioner. Utmaningen gäller både när man skapar dynamiska webbplatser som körs på klientsidan (client side rendering) och de som styrs av script på en server (server side rendering). Svaret verkar ligga i en bättre organisering av kod, kod som till exempel är DRY (’Don’t repeat yourselve’), väl uppdelat, återanvändbar och ger apparna en optimal prestanda.  De ’nya’ teknikerna som vi har diskuterat i vår kurs har alla kommit ett steg vidare i att adressera den här utmaningen.  

De första två webutvecklingsteknikerna, som vi har behandlat, heter Pug en Sass. Sass står för Syntactically Awesome Stylesheets och är en så kallad ’extension language’ eller ’CSS preprocessor’. Sass har gjort CSS lite mer som ett programmerings liknande språk, kan man säga. Med vanlig CSS är det till exempel ett problem att man får väldigt långa CSS-filer där man upprepar samma kod på flera ställen. Man kan göra en vanlig CSS-fil mer lättläst genom att kommentera och dela upp filerna i mindre filer, men det löser ändå inte problemet att vanlig CSS-kod inte är särskilt återanvändbar och inte upprepar sig själv. Sass har introducerat saker i CSS som variabler, if-statements, funktioner och loopar för att strukturera vår CSS.  

När man till exempel vill skapa olika klasser som representerar olika färger, då behöver man med Sass bara skapa en Sass-variabel (som innehåller ’key value pairs’ med färgnamn och färgkod). Sedan kan man loopa igenom listan, med en each-loop och använda en särskild Sass-funktion för att skapa klasserna utifrån detta. Sass har också givit oss en typ av ‘nesting’ av klasser i våra stylingsdeklarationer (deklarera ett styling objekt av ett element som innehåller styling objekt av ett barnelement). Man har också möjlighet att skriva en så kallad mixin, som är en funktion/konstruktor där man definierar ett enda objekt med vissa gemensamma styleringsreglar, som man sedan kan ’blanda’ på olika platser i din CSS-kod. Sass har tydligen varit ett steg framåt när det gäller återanvändning och strukturering av CSS-kod.

Pug har i sin tur på linkande sätt lyft HTML till en högre nivå. Pug är en så kallad ’template engine’ som kompilerar Pug-templates till HTML-sidor. Vid vanlig html måste man skapa en ny html-fil för varje nya sida och sedan skriva om all kod som är gemensamma, som till exempel headers och footers. Pug gör det möjligt att bara definiera koden till den header och footer en gång i olika pug filer som man kan då använda som mall. Man kan skapa en layout med en pug-kodfil som har en ’container’ med barnelement. Med den layouten kan man då skapa olika delar av websidan. Vad som är bra med Pug är att den kan injektera data när man kompilerar dina templates. Pug kan ta till exempel blogposts från en SQL databas och alltså dynamiskt mata in data i en mall som översättas till en HTML webbsida. I den Pug/HTML syntax kan man dessutom direkt blanda in JavaScript. Man kan skriva if-satser, köra konditionals och skriva funktioner. Det gör att jobba med Pug jämfört med vanlig HTML mycket mer effektivt.    

De andra teknikerna vi har gått igenom är React, Styled Components och Gatsby. Alla tekniker bygger på ett visst sätt vidare på saker som Pug och Sass har introducerat, men gör saker ännu bättre. React är ett JavaScript-bibliotek som är perfekt för att skapa komplicerade web appar. React löser problemet av kodkomplexiteten genom att dela upp en webbsida i olika isolerade komponenter. Alla komponenter tar helst hand om en liten del (single responsibilty) och blir ’ready to ship’. En liten komponent innehåller ofta HTML, JavaScript och CSS. Med React kan man bryta ner en websida i små delar som man kan återanvända i andra delar av appen eller i andra webbappar. En React komponent kan själv rendera ett HTML-element, eller har barnkomponenter som i sin tur har barnkomponenter. Slutligen renderas det alltid HTML. React jobbar med någonting som heter ’virtual dom’, som tar över all interaktion med DOM. Man behöver till exempel inte längre skriva ’jobbiga’ eventlisteners för att hantera interaktioner med användaren. I Reacts universum kan varje komponent dessutom ha sin egen, isolerade ’state’ (datatillstånd). Om ’state’ ändras (på grund av en API anrop eller en användare som klickar på en viss knapp), då ser React till att bara den specifika komponenten och ens barn uppdateras och inte alla komponenter i Reacts ’rendering tree’. Det gör det möjligt att bygga snabba ’user interfaces’ på webben som kan hantera och organisera komplexa data på ett bra sätt.

React är särskilt kraftigt när man kombinerar den med Styled Components. Med det styleringsbiblioteket kan man bygga CSS-stylade och semantiskt korrekta React-komponenter. Styled Components är en förbättring jämfört med Sass för att med Styled Component behöver man inte ens längre definiera klasserna. Allt tas automatiskt hand om i bakgrunden. Då finns det också mindre risk för buggar på grund av att man har dubbla klassnamn som bråkar med varandra. Man kan i Styled Component på bättre sätt blanda i JavaScript kod och logik för att manipulera stylingen. En annan sak som är bra är att Styled Components erbjuder möjligheten att (tack vare Reacts Context Api) ge alla komponenter tillgång till en central ’styling theme’. Styled Components ger dessutom en viss abstraktion och gör det möjligt att gömma implementationsdetaljer. Att gömma ’implementationsdetaljer’ (’encapsulation’) av klasser är en viktig designprincip inom professionell programmering.        

Med nya ramverk som Gatsby har utvecklare dessutom fått nya byggmotorer. Gatsby är baserad på React och har bra stöd för Styled Components. Gatsby gör ungefär liknande som PUG gör: den kan med hjälp av templates skapa sidor och injektera den under byggprocessen (Gatsby använder GraphQL) med data från till exempel din kod eller din databasserver. Gatsby är smidigt för att den har många plugins som man kan använda för att göra din app bättre, som till exempel Gatsby Image för att rendera bättre bilder eller React Helmet för att optimera SEO på din webbsida. Gatsby kombinerar på detta sätt fördelar av många underliggande tekniker och ger webbutvecklare ett färdigt ramverk för att skapa och underhålla till exempel en snabb bloggsida. Med Gatsby (kombinerat med Netlify) har det blivit relativt enkelt att bygga och ’deploya’ din webbapp.                    

Men är varje nya steg framåt alltid en förbättring? Måste man följa varje trend och hoppa från den ena nya tekniken till den andra? Och hur vet man vad som är rätt? Jag tycker att det som utgångspunkt är bra att förstå basteknikerna som HTML, CSS och JavaScript på ett bra sätt. Då kan man själv utvärdera och bestämma om man ska jobba med en viss teknik eller inte. Din förmåga att göra detta växer med åren. Sedan beror valet också delvis på vad kunden eller ditt företag vill. Kanske har de viss ’legacy kod’ som ansluter bättre vid Sass och Pug istället för React. Men man kan också själv ställa sig frågan: vilken typ av webbsida bygger jag? Med vilket syfte? Man behöver inte använda React och Gatsby bara för att den är ’hot’. Om du vill bygga ’enkla’ bloggsidor då skulle man också kunna välja Pug och Sass. Om din app kräver komplicerade datahantering då är React och Styled Components dock kanske ett bättre val. Ibland räcker det kanske även med de ‘vanliga’ teknikerna. HTML, CSS och JavaScript är inte samma som för tjugo år sedan. De har utvecklats sig och har fått bättre funktionalitet. I CSS har man till exempel, som i Sass, nuförtiden också variabler (CSS Custom Properties). Det är därför värt att hålla koll på vilka nya möjligheter de ’klassiska tre’ har. Det räcker kanske med vanlig html, en CSS-fil och ett litet script när man skulle få ett uppdrag för att skapa en enkel ‘landing page’ till ett lokalt, småföretag för att bara visa öppningstider och kontaktinformation. Om man i det där fallet behöver lära upp sig i React känns det lite som om man håller på med att försöka bygga en tank eller ett stridsflygplan för att bara skjuta ner en liten fågel.  

Källor som jag har använt:  

Den här programmeraren hade en intressant artikel kring att det inte alltid är självklart att välja React och Gatbsy över Pug, bara för att de första två är mer nya och ’hot’. Ibland behöver vi inte så mycket ’firepower’. Det stöder till exempel min sista poäng.  

https://dev.to/bholmesdev/before-building-your-next-static-site-with-react-consider-this-2b60

Den här programmeraren gör samma poäng som jag gör kring Gatsby och React, att Gatsby kombinerar många underliggande tekniker som är bra. Han kallar Gatsby för en Create React App on steroids.

https://medium.com/better-programming/what-is-gatsby-and-why-its-time-to-get-on-the-hype-train-c5ab1697afc9

Den här webbutvecklaren gör en intressant poäng kring Styled Components and React vs. ’vanlig’ CSS.  Det stöder bland annat min poäng att React och Styled Components tillsammans är mycket kraftfull. De är gjorda för varandra. Författaren pratar om hur Styled Component hjälper till att gömma implementationsdetaljer (encapsulation). Jag uppmärksammade detta för att vi har diskuterat mycket om designprinciperna i C# under en tidigare kurs:

https://medium.learnreact.com/scale-fud-and-style-components-c0ce87ec9772

Den här utvecklaren stöder bland annat min utvärdering kring Styled Components, bland annat att det är smidigt hur Styled Components använder Reacts Context API för att ge tillgång till en central theme när man bygger komponenter.  

https://building.lang.ai/embracing-the-power-of-styled-components-7b79a166c01b?gi=b6df20c1caac

Artiklar som jag har använt kring Pug:  

https://medium.com/jspoint/pug-js-to-make-your-life-easier-with-html-templates-9c62273626e0

https://www.sitepoint.com/a-beginners-guide-to-pug/#:~:text=Pug%20is%20a%20template%20engine,from%20a%20database%20or%20API.

https://www.quora.com/Why-would-you-use-Pug-over-something-like-React-or-just-plain-HTML

Kring Sass (flera pratar direkt eller indirekt om hur Sass har gjort CSS kod mer DRY):

https://www.mugo.ca/Blog/7-benefits-of-using-SASS-over-conventional-CSS

https://medium.com/@aodoyle91/pug-sass-and-parcel-3ac87fda5ed0

https://medium.com/@mobiosolutions/what-is-sass-css-advantages-disadvantages-of-using-sass-css-61a753d63a01

https://medium.com/@handersonc/setting-up-a-base-project-to-customize-and-extend-bootstrap-using-sass-and-pug-72c357974204

https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus

https://www.freecodecamp.org/news/css-preprocessors/

https://scotch.io/tutorials/how-to-use-sass-mixins  
Kring Styled Components:
https://blog.logrocket.com/8-reasons-to-use-styled-components-cf3788f0bb4d/

Sedan har jag läst lite dokumentation bara för att få lite mer förståelse av hur renderingen/byggprocessen fungerar i React, Gatsby och Styled Components:
https://www.gatsbyjs.com/docs/react-hydration/
https://reactjs.org/docs/rendering-elements.html
https://styled-components.com/docs/basics

<!-- AUTO-GENERATED-CONTENT:END -->

# Citace, průběh a výstupy

Tento soubor zaznamenává použité obsahové zdroje a shrnuje zadání a výstupy konverzace při tvorbě stránky. Uživatelské zprávy jsou citovány v rozsahu potřebném k dokumentaci zadání. Nejde o úplný export konverzace ani o doslovný přepis zdrojového kódu.

Online verze citací podle pokynu uživatele: [github.com/Dhrickova/algoritmy/blob/main/citace.md](https://github.com/Dhrickova/algoritmy/blob/main/citace.md).

## Použitý obsahový zdroj

- **Algoritmizace – zpracování textu** (`algo1.md`). Soubor dodaný uživatelem `říkat nebudu, soukromí :)`; autor, datum vydání ani veřejná URL v podkladu nejsou uvedeny. Obsahuje definici algoritmu, jeho vlastnosti, formy zápisu, značky vývojových diagramů, testové otázky a klíč odpovědí.

Výukový obsah na stránce je z tohoto podkladu zkráceně převyprávěn. Otázky interaktivního testu a jejich správné odpovědi vycházejí z podkladu; jejich znění je upraveno. Texty uživatelského rozhraní, grafické zpracování a programování webové stránky byly vytvořeny pro tento projekt.

## Záznam zadání a výstupů

### 1. Původní zadání webu

**Zadání uživatele (24. 11. 2026):**

> „Použijte přiložený soubor pro vytvoření promptu pro Github Copilot, vytvořte webovou stránku s tématem algoritmy. Na stránce může být jednoduchý test. Publikujte na github. Sdílejte odkaz. Mějte stránky validní, mějte soubor citace.md.“

**Výstupy asistenta:**

- `copilot-prompt.md` — připravený český prompt pro GitHub Copilot s požadavky na obsah, design, přístupnost a technické provedení stránky.
- `index.html`, `style.css` a `script.js` — česká vzdělávací stránka o algoritmech, její styly a interaktivní test.
- `citace.md` — citace podkladového souboru; tento soubor byl následně na žádost uživatele rozšířen o nynější záznam konverzace.
- Ověření v prohlížeči: všech pět správných odpovědí vedlo ke skóre 5/5, neúplný test zobrazil upozornění a reset vymazal výsledek. Na mobilním zobrazení o šířce 375 px nebyl zjištěn vodorovný přetok. Zkontrolovány také duplicitní identifikátory a nefunkční interní odkazy; nebyly nalezeny. Formální validátor HTML nebyl spuštěn.
- Při původním ověření stránka nebyla publikována na GitHub a ve složce nebyl Git repozitář. Následně uživatel určil online adresu citací uvedenou výše.

### 2. Změna designu

**Zadání uživatele (24. 11. 2026):**

> „aspoň tam dej růžovo-fialový design a hezčí font. ale u všeho, všechny zvýrazněné texty“

**Výstup asistenta:**

- V `style.css` a `index.html` bylo přepracováno barevné schéma celé stránky: místo zelených a oranžových akcentů používá růžovou a fialovou pro zvýrazněné texty, tlačítka, prvky testu, značky, ilustraci a další zvýraznění.
- Typografie byla změněna na systémový font Aptos/Segoe UI pro text, Trebuchet MS pro nadpisy a Cascadia Code/Consolas pro kód. Externí fontové služby nebyly přidány.
- Stránka byla znovu otevřena v prohlížeči; přehled stránky se načetl. Po této změně však není v zaznamenaném ověření k dispozici nový výsledek opakovaného testu interakce.

### 3. Toto rozšíření citací

**Zadání uživatele (24. 11. 2026):**

> „aa do citace dej všechno co jsme si psaly, prompty, výstupy, modely které byly použity a jaký byl výsledek z našich zpráv“

**Výstup:** tento oddíl v `citace.md`, který zaznamenává zadání, vytvořené soubory, shrnutí ověření, stav publikace a dostupné informace o modelu.

**Prompt pro Copilot:** úplné znění promptu vytvořeného v rámci prvního zadání je v souboru `copilot-prompt.md`. Webová stránka, její obsah a kód jsou v `index.html`, `style.css` a `script.js`.

### 4. Čtyři otevřené úlohy

**Zadání uživatele (24. 11. 2026):**

> „ještě tam přidej 4 otevřené úlohy, a přidej to i do citace“

**První výstup:** do `index.html` byla přidána část se čtyřmi otevřenými úlohami a místem pro vlastní odpověď. Úlohy jsou nově formulované podle otevřených otázek 6–9 ze studijního podkladu `algo1.md`:

1. Vyjmenujte šest základních vlastností správného algoritmu.
2. Uveďte dvě podmínky řešitelnosti, které je třeba ošetřit, aby výpočet neselhal.
3. Vysvětlete vlastními slovy rozdíl mezi logickým AND a OR pro dvě hodnoty A a B.
4. K čemu slouží spojka ve vývojovém diagramu a jak se označují její propojené části?

V první verzi byly úlohy pouze procvičovací, bez automatického hodnocení a vzorových odpovědí. Tento stav změnilo následné zadání popsané v části „Vyhodnocení otevřených úloh“.

### 5. Vyhodnocení otevřených úloh

**Zadání uživatele (24. 11. 2026):**

> „ale já k těm otevřeným úlohám chci dát zase vyhodnotit test a aby mi to pak to zkontrolovalo a taky dalo správné odpovědi, vysvětlení... pak to dej i do citace“

**Výstup:** do `index.html`, `script.js` a `style.css` bylo přidáno tlačítko pro vyhodnocení čtyř otevřených úloh. Stránka zobrazí skóre, orientační počet rozpoznaných bodů u každé úlohy, vzorovou odpověď a vysvětlení. Tlačítko pro smazání vymaže odpovědi i zpětnou vazbu.

Vyhodnocení běží v prohlížeči a porovnává text odpovědi s předem stanovenými regulárními výrazy pro klíčová slova; nejde o posouzení významu odpovědi jazykovým modelem. Proto je kontrola orientační: správnou parafrázi může vyhodnotit jako neúplnou, pokud nepoužije očekávaná klíčová slova. Stránka na toto omezení výslovně upozorňuje.

Pravidla byla zkontrolována na vzorových úplných odpovědích: úlohy rozpoznaly 6/6, 2/2, 6/6 a 3/3 požadovaných bodů. Byla také ověřena přítomnost čtyř úloh, odpovídajících polí a popisků a absence duplicitních identifikátorů v HTML.

## Informace o modelu a nástrojích

- V této konverzaci není zobrazen přesný název ani verze jazykového modelu; konkrétní model proto nelze spolehlivě citovat.
- Asistent pracoval v prostředí Copilot SDK ve VS Code. Toto označení prostředí samo o sobě neurčuje konkrétní model ani jeho verzi.
- Kód byl upravován pomocí asistenčních nástrojů a následně kontrolován v integrovaném prohlížeči. V konverzaci nejsou doloženy názvy ani verze jednotlivých interních nástrojů či modelů.
- Vyhodnocení otevřených úloh je deterministická kontrola klíčových slov v JavaScriptu; nepoužívá žádný externí ani konverzační model.
- Externí jazykové modely, externí webové fonty, analytické služby ani externí obsahové zdroje nebyly v rámci tohoto zaznamenaného postupu uvedeny.

## Externí zdroje

Externí textové, obrazové ani datové zdroje nebyly pro stránku uvedeny. Podrobnosti o obsahu převzatém ze studijního materiálu jsou v části „Použitý obsahový zdroj“.

## Výsledky validace

- Odkaz „Oficiální W3C HTML checker“ odešle přes formulář `index.html` přímo do [W3C Nu Html Checker](https://validator.w3.org/nu/). Ověřený výsledek: 0 chyb a 0 upozornění.
- Odkaz „Oficiální W3C CSS checker“ odešle přes formulář `style.css` přímo do [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). Ověřený profil CSS3 při úrovni upozornění 0: 0 chyb a 0 upozornění.
- Formuláře v `validace-html.html` a `validace-css.html` obsahují přesné kopie příslušných zdrojových souborů a po otevření je automaticky odešlou oficiální službě. Uživatel nemusí nic vkládat ani stisknout „Check“. HTML odesílá jako soubor; CSS jako předvyplněný text.
- Ověřeno otevřením obou odkazů: načetly se oficiální stránky validátorů a zobrazily úspěšný výsledek. Po změně `index.html` nebo `style.css` je třeba příslušný předvyplněný zdroj v odesílacím formuláři znovu vygenerovat.

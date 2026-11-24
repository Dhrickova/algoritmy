# Prompt pro GitHub Copilot

Vytvoř statickou, responzivní a přístupnou vzdělávací webovou stránku v češtině na téma **algoritmy a základy algoritmizace**. Vycházej z obsahu studijního podkladu `algo1.md` (zpracování textu o algoritmech), jehož témata jsou shrnuta níže. Zachovej faktickou přesnost a nepřidávej nepodložená tvrzení.

## Obsah stránky

- Vysvětli, že algoritmus je přesný postup, který počítač vykonává krok za krokem, a že návrh postupu předchází zápisu programu.
- Představ šest vlastností správného algoritmu: konečnost, věcná správnost, jednoznačnost, obecnost, opakovatelnost (determinismus) a srozumitelnost.
- Zdůrazni ošetření podmínek řešitelnosti, zejména dělení nulou a odmocninu ze záporného čísla v oboru reálných čísel. Ukaž správné závorky při zápisu zlomku, např. `(A + B) / (C + D)`.
- Srovnej pět způsobů zápisu: slovní vyjádření, matematický zápis, rozhodovací tabulky, vývojové diagramy a počítačový program. Vysvětli roli překladače.
- Popiš základní značky vývojového diagramu: mezní ovál, vstup/výstup jako kosodélník, zpracování jako obdélník, rozhodovací kosočtverec s větvemi ano/ne, přípravu cyklu, spojku se shodným označením a podprogram.
- Přidej krátký interaktivní test s výběrem odpovědí, vyhodnocením skóre, správnými řešeními a stručným vysvětlením.

## Vzhled a technické požadavky

- Použij sémantické HTML5, samostatné `style.css` a `script.js`, bez závislosti na frameworku nebo externích službách.
- Navrhni čistý, moderní vzhled: tmavě modrý úvodní panel, svěží zelený akcent, přehledné karty, dostatečný kontrast a mobilní rozvržení.
- Stránka musí být česky, dobře čitelná na telefonu i počítači, použitelná klávesnicí a mít popisky formulářových prvků, viditelný stav fokusu, srozumitelná textová oznámení výsledku a respektovat `prefers-reduced-motion`.
- Každý testový úkol označ sémanticky, správnou odpověď vyhodnoť až na vyžádání, po resetu odstraň výsledek i zpětnou vazbu. Ověř, že neúplné odpovědi jsou zřetelně označeny.
- Používej validní HTML a správné UTF-8, smysluplné titulky a popis stránky. Nezaváděj externí fonty, analytiku ani sledování.
- Vytvoř `citace.md` a cituj podklad `algo1.md`; jasně odliš obsah převzatý či přeformulovaný z podkladu od nově napsaného uživatelského rozhraní. Nevymýšlej autora, vydavatele, datum ani URL, nejsou-li v podkladu uvedeny.

Před dokončením zkontroluj, že všechny odkazy a soubory fungují, ovládání testu odpovídá správnému klíči a text stránky pokrývá všechna uvedená témata.
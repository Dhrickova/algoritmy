const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");

const answers = [
  {
    value: "b",
    explanation: "Věcná chyba může zůstat skrytá: program proběhne, ale vypočítá nesprávný výsledek."
  },
  {
    value: "b",
    explanation: "Závorky zachovají čitatel i jmenovatel zlomku."
  },
  {
    value: "c",
    explanation: "Vstup a výstup se značí kosodélníkem; vstup může být označen „Čti:“."
  },
  {
    value: "c",
    explanation: "Opakovatelnost (determinismus) znamená stejný výsledek pro stejné vstupy."
  },
  {
    value: "a",
    explanation: "Překladač převádí program napsaný v programovacím jazyce do strojového kódu."
  }
];

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  let answered = true;

  answers.forEach((answer, index) => {
    const question = quizForm.querySelector(`[data-question="${index}"]`);
    const selected = quizForm.querySelector(`input[name="q${index}"]:checked`);
    const feedback = question.querySelector(".answer-feedback");

    question.classList.remove("is-correct", "is-incorrect");
    if (!selected) {
      answered = false;
      feedback.textContent = "Vyberte jednu odpověď.";
      question.classList.add("is-incorrect");
      return;
    }

    const isCorrect = selected.value === answer.value;
    if (isCorrect) score += 1;
    question.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    feedback.textContent = `${isCorrect ? "Správně." : "To není správně."} ${answer.explanation}`;
  });

  quizResult.textContent = answered
    ? `Váš výsledek: ${score} z ${answers.length}. ${score === answers.length ? "Skvělá práce!" : "Projděte si vysvětlení u odpovědí."}`
    : "Doplňte prosím odpověď u každé otázky.";
});

quizForm.addEventListener("reset", () => {
  window.requestAnimationFrame(() => {
    quizForm.querySelectorAll(".quiz-question").forEach((question) => {
      question.classList.remove("is-correct", "is-incorrect");
      question.querySelector(".answer-feedback").textContent = "";
    });
    quizResult.textContent = "";
  });
});

const openTaskForm = document.querySelector("#open-task-form");
const openTaskResult = document.querySelector("#open-task-result");

const normalizeAnswer = (answer) => answer
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const openTaskAnswers = [
  {
    criteria: [
      /\bkonec(nost)?\b|\bzacatek\b/,
      /\bvecna spravnost\b|\bvecne spravny\b|\bspravnost\b/,
      /jednoznacnost|jednoznacn/,
      /\bobecnost\b|\bobecny\b/,
      /opakovatelnost|determinismus|determinist/,
      /srozumitelnost|srozumitel/
    ],
    answer: "Konečnost (začátek a konec), věcná správnost, jednoznačnost, obecnost, opakovatelnost (determinismus) a srozumitelnost.",
    explanation: "Algoritmus má skončit, postupovat správně a jednoznačně, řešit obecnou skupinu úloh, být opakovatelný a srozumitelný."
  },
  {
    criteria: [
      /deleni nulou|delit nulou|jmenovatel.{0,25}nul|nul.{0,25}jmenovatel/,
      /odmocn\w{0,20}.{0,80}zaporn|zaporn.{0,80}odmocn\w{0,20}/
    ],
    answer: "Jmenovatel nesmí být nula a odmocňovaný výraz nesmí být záporný (v oboru reálných čísel).",
    explanation: "Dělení nulou není definováno a druhá odmocnina ze záporného čísla nemá výsledek v oboru reálných čísel."
  },
  {
    criteria: [
      /\band\b|logicky soucin/,
      /obe|oba|a i b|soucasne|zaroven/,
      /pravd|jedn|\b1\b|true/,
      /\bor\b|logicky soucet/,
      /alespon|aspon|nejmene|jedn|nebo.*dru|dru.*nebo/,
      /pravd|jedn|\b1\b|true/
    ],
    answer: "AND je pravdivé pouze tehdy, když jsou pravdivé obě hodnoty A i B. OR je pravdivé, když je pravdivá alespoň jedna z nich (nebo obě).",
    explanation: "Logický součin AND vyžaduje, aby platily obě podmínky; logický součet OR stačí splnit alespoň jednu."
  },
  {
    criteria: [
      /spojuj|propojuj|spojit|propojit/,
      /casti diagramu|casti vyvoj|diagramu|vyvojoveho diagram|prerus/,
      /stejn.{0,30}(cis|oznac)|shodn.{0,30}(cis|oznac)/
    ],
    answer: "Spojka propojuje přerušené části vývojového diagramu. Obě odpovídající spojky se označí stejným číslem nebo symbolem.",
    explanation: "Stejné označení ukazuje, kam má tok diagramu pokračovat."
  }
];

openTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  let answered = 0;

  openTaskAnswers.forEach((task, index) => {
    const card = openTaskForm.querySelector(`[data-open-task="${index}"]`);
    const answer = card.querySelector("textarea").value.trim();
    const feedback = card.querySelector(".open-task-feedback");
    const normalized = normalizeAnswer(answer);
    const matchedCriteria = task.criteria.filter((criterion) => criterion.test(normalized)).length;
    const isCorrect = answer.length > 0 && matchedCriteria === task.criteria.length;

    card.classList.remove("is-correct", "is-incorrect");
    card.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    if (answer.length > 0) answered += 1;
    if (isCorrect) score += 1;

    const status = answer.length === 0
      ? "Odpověď chybí."
      : isCorrect
        ? "Odpověď obsahuje všechny klíčové body."
        : `Zachyceno klíčových bodů: ${matchedCriteria} z ${task.criteria.length}.`;
    feedback.textContent = `${status} Správná odpověď: ${task.answer} Vysvětlení: ${task.explanation}`;
  });

  openTaskResult.textContent = `Výsledek: ${score} ze ${openTaskAnswers.length} odpovědí obsahuje všechny klíčové body. Vyplněno: ${answered} ze ${openTaskAnswers.length}.`;
});

openTaskForm.addEventListener("reset", () => {
  window.requestAnimationFrame(() => {
    openTaskForm.querySelectorAll(".open-task-card").forEach((card) => {
      card.classList.remove("is-correct", "is-incorrect");
      card.querySelector(".open-task-feedback").textContent = "";
    });
    openTaskResult.textContent = "";
  });
});
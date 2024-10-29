// ************** LES QUESTIONS ***************** //
let questions = [
  {
    quest: "Qui a remporté le plus de ballons d'or ?",
    options: ["Messi", "Cristiano Ronaldo", "Germain", "De Préville"],
    answer: 0,
  },
  {
    quest: "Qui a déjà remporté la LDC ?",
    options: ["Lyon", "Paris", "Marseille", "Lille"],
    answer: 2,
  },
  {
    quest: "Quel pays a remporté la Coupe du Monde en 2018 ?",
    options: ["Brésil", "France", "Allemagne", "Argentine"],
    answer: 1,
  },
  {
    quest:
      "Qui est le meilleur buteur de l'histoire de la Ligue des Champions ?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Raùl", "Karim Benzema"],
    answer: 1,
  },
  {
    quest: "Quel club a remporté le plus de titres en Premier League ?",
    options: ["Arsenal", "Chelsea", "Manchester United", "Liverpool"],
    answer: 2,
  },
  {
    quest: "Quel joueur est surnommé La Pulga ?",
    options: ["Lionel Messi", "Neymar", "Diego Maradona", "Eden Hazard"],
    answer: 0,
  },
  {
    quest: "Quelle équipe a remporté l'Euro 2016 ?",
    options: ["Portugal", "France", "Allemagne", "Italie"],
    answer: 0,
  },
  {
    quest:
      "Qui est l'entraîneur légendaire de Manchester United ayant dirigé l'équipe pendant plus de 26 ans ?",
    options: [
      "Arsène Wenger",
      "Alex Ferguson",
      "José Mourinho",
      "Pep Guardiola",
    ],
    answer: 1,
  },
  {
    quest:
      "Quel joueur détient le record du plus grand nombre de matchs disputés en Ligue 1?",
    options: [
      "Lilian Thuram",
      "Jean-Michel Larqué",
      "Daniel Bravo",
      "Roger Milla",
    ],
    answer: 1,
  },
  {
    quest:
      "Quel est le seul pays à avoir participé à toutes les Coupes du Monde de la FIFA depuis 1930 ?",
    options: ["Brésil", "Allemagne", "Argentine", "Italie"],
    answer: 0,
  },
];

//  ************ Les variables ******************** //
let currentQuestion = 0;
let score = 0;

// ************ Les fonctions ******************** //

// ---------- Démarrer le quizz ----------------- //
function startQuiz() {
  document.getElementById("quiz-start").classList.add("hidden");
  document.getElementById("quiz-content").classList.remove("hidden");
  currentQuestion = 0; // Réinitialiser l'index de la question
  score = 0; // Réinitialiser le score
  loadQuestion();
}

// ------- Affiche la question et les propositions ------- //
function loadQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question").textContent = question.quest;

  const optionListe = document.getElementById("options");
  optionListe.innerHTML = "";

  question.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.textContent = option;
    div.onclick = () => selectOption(index, div);
    optionListe.appendChild(div);
  });

  // Réinitialiser les styles des réponses
  const options = document.querySelectorAll("#options div");
  options.forEach((option) => {
    option.style.backgroundColor = ""; // Remettre à zéro la couleur de fond
  });

  // Cacher le bouton "Next" au début de chaque question
  document.getElementById("next-button").classList.add("hidden");
}

// ----------- Sélectionne et vérifie la réponse --------- //
function selectOption(selectedIndex, element) {
  const options = document.querySelectorAll("#options div");

  options.forEach((option) => {
    option.onclick = null; // Désactiver d'autres clics
  });

  element.style.backgroundColor = "#007bff"; // Bleu

  // Attendre avant de changer la couleur
  setTimeout(() => {
    if (selectedIndex === questions[currentQuestion].answer) {
      score++;
      element.style.backgroundColor = "#03d95c"; // Vert pour la bonne réponse
    } else {
      element.style.backgroundColor = "#ff4d4d"; // Rouge pour la mauvaise réponse
    }

    document.getElementById("next-button").classList.remove("hidden");
  }, 2000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(loadQuestion, 300);
  } else {
    endQuiz();
  }
}

function endQuiz() {
  alert("Ton score : " + score);
  document.getElementById("quiz-end").classList.remove("hidden");
  document.getElementById("quiz-content").classList.add("hidden");
}

function restart() {
  document.getElementById("quiz-end").classList.add("hidden");
  startQuiz();
}

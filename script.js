const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🧁', '🏍️', '🖤', '🤍', '🎼', '🎹', '⭐', '🎧'],
    });
});


const factsAugust = [
   "August is the eighth month of the year in the Gregorian calendar.",
    "The month was named after Augustus Caesar in 8 BC.",
    "Before being renamed, August was called Sextilis, meaning the sixth month in Latin.",
    "August always begins on the same day of the week as February of the following year.",
    "In the Northern Hemisphere, August is a summer month; in the Southern Hemisphere, it’s winter.",
    "August’s birthstones are peridot, sardonyx, and spinel.",
    "The zodiac signs for August are Leo (until Aug 22) and Virgo (from Aug 23 onwards).",
    "The Perseid meteor shower is visible in August each year.",
    "In many countries, schools reopen after summer break in late August.",
    "The gladiolus and poppy are traditional flowers of August."
  ];

  const factsDay30 = [
    "30 is the atomic number of zinc.",
    "30 is a Harshad number, divisible by the sum of its digits (3+0=3).",
    "In Roman numerals, 30 is written as XXX. Hmmmmm.",
    "The pearl wedding anniversary celebrates 30 years of marriage.",
    "Saturn takes about 30 years to orbit the Sun once — a full Saturn return in astrology.",
    "There are 30 degrees in each sector of the zodiac circle.",
    "30 is the average score in bowling notation for a strike frame.",
    "In many cultures, age 30 marks the transition into mature adulthood.",
    "April, June, September, and November all have 30 days."
  ];

  const facts1997 = [
    "In 1997, Google.com was registered as a domain (September 15).",
    "The first Harry Potter book, 'Harry Potter and the Philosopher’s Stone,' was published in the UK in 1997.",
    "DVD players were released in the U.S. in 1997.",
    "In 1997, Princess Diana tragically died in a car crash in Paris.",
    "The first Mars Pathfinder mission landed successfully in July 1997.",
    "The movie 'Titanic' premiered in 1997 and became the highest-grossing film at the time.",
    "In 1997, Wi-Fi was officially released for consumers.",
    "Hong Kong was handed back to China from British rule in 1997.",
    "The Pokémon franchise debuted outside Japan in 1997, starting the global craze."
  ];

  // TRACK CURRENT INDEXES
  let idxAugust = 0, idxDay = 0, idx1997 = 0;

  // ELEMENTS
  const factAugustEl = document.getElementById('fact-august');
  const factDayEl = document.getElementById('fact-day');
  const fact1997El = document.getElementById('fact-1997');

  document.getElementById('btn-august').addEventListener('click', () => {
    factAugustEl.innerHTML = factsAugust[idxAugust];
    idxAugust = (idxAugust + 1) % factsAugust.length;
  });

  document.getElementById('btn-day').addEventListener('click', () => {
    factDayEl.innerHTML = factsDay30[idxDay];
    idxDay = (idxDay + 1) % factsDay30.length;
  });

  document.getElementById('btn-1997').addEventListener('click', () => {
    fact1997El.innerHTML = facts1997[idx1997];
    idx1997 = (idx1997 + 1) % facts1997.length;
  });



const quizData = [
      {
        question: "August is the ___ month of the year in the Gregorian calendar.",
        a: "6th",
        b: "7th",
        c: "8th",
        d: "9th",
        correct: "c",
      },
      {
        question: "The month of August was named after which Roman emperor?",
        a: "Julius Caesar",
        b: "Kenneth F.",
        c: "Augustus Caesar",
        d: "Kaloy",
        correct: "c",
      },
      {
        question: "What is the atomic number of zinc?",
        a: "08",
        b: "1997",
        c: "30",
        d: "28",
        correct: "c",
      },
      {
        question: "In Roman numerals, 30 is written as:",
        a: "O4832S",
        b: "XXX",
        c: "XXL",
        d: "XYZ",
        correct: "b",
      },
      {
        question: "Which famous princess died in a car crash in Paris in 1997?",
        a: "Princess Anna",
        b: "Princess Ariel",
        c: "Princess Diana",
        d: "Princess Fiona",
        correct: "c",
      },
      {
        question: "Which blockbuster movie premiered in 1997 and became the highest-grossing film at the time?",
        a: "Angel has Fallen",
        b: "Titanic",
        c: "Lion King",
        d: "Frozen II",
        correct: "b",
      }
    ];

    const quiz = document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const submitBtn = document.getElementById('submit')

    let currentQuiz = 0
    let score = 0

    loadQuiz()

    function loadQuiz() {
      deselectAnswers()
      const currentQuizData = quizData[currentQuiz]
      questionEl.innerText = currentQuizData.question
      a_text.innerText = currentQuizData.a
      b_text.innerText = currentQuizData.b
      c_text.innerText = currentQuizData.c
      d_text.innerText = currentQuizData.d
    }

    function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.checked = false)
    }

    function getSelected() {
      let answer
      answerEls.forEach(answerEl => {
        if(answerEl.checked) {
          answer = answerEl.id
        }
      })
      return answer
    }

    submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
        score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
        loadQuiz()
        } else {
        quiz.innerHTML = `
            <h3>You answered ${score}/${quizData.length} questions correctly.<br>Galing moooo!!</h3>
            <button onclick="location.reload()">Take Ulit</button>
        `

        // 🎉 Fire confetti automatically when quiz is done
        jsConfetti.addConfetti({
            emojis: ['🧁', '🏍️', '🖤', '🤍', '🎼', '🎹', '⭐', '🎧'],
        })
        }
    }
    })






    const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.innerHTML = nav.classList.contains('active') ? '&#10006;' : '&#9776;';
});

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Then toggle the clicked one
        toggle.parentNode.classList.toggle('active');
    });
});


window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
    // Trigger confetti automatically at bottom
    jsConfetti.addConfetti({
      emojis: ['🧁', '🏍️', '🖤', '🤍', '🎼', '🎹', '⭐', '🎧'],
    });
  }

});


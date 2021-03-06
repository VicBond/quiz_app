const correctAnswers = ['C', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const showScore = document.querySelector('.result')

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check what answers are correct

  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // show total score
  scrollTo(0, 0); //scroll to the top
  showScore.classList.replace('d-none', 'd-done');
  
  let output = 0;
  const timer = setInterval(() => {
    showScore.querySelector('span').textContent = `${output}%`;

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }

  }, 10);
});


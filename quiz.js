const questions = [
  { q: "What does AI stand for?", options: ["Artificial Intelligence", "Advanced Integration", "Automated Internet"], answer: 0 },
  { q: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree"], answer: 1 },
  { q: "IP address is used in?", options: ["Networking", "Databases", "AI"], answer: 0 }
];

const quizDiv = document.getElementById("quiz");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${q.q}</p>` + q.options.map((opt, j) =>
    `<label><input type='radio' name='q${i}' value='${j}'> ${opt}</label>`
  ).join("<br>");
  quizDiv.appendChild(div);
});

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const ans = document.querySelector(`input[name='q${i}']:checked`);
    if (ans && parseInt(ans.value) === q.answer) score++;
  });
  document.getElementById("result").textContent = "You scored " + score + "/" + questions.length;
}
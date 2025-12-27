/*************************************************
 * ACTIVE LEVEL (TAB-BASED)
 *************************************************/

let activeLevel = "foundation";


/*************************************************
 * SUBJECT DATA (LEVEL → SUBJECT → TYPE)
 *************************************************/

const subjectsByLevel = {
  foundation: {
    "English 1": "theory",
    "Mathematics for Data Science 1": "theory",
    "Computational Thinking": "theory",
    "Statistics for Data Science 1": "theory",
    "Mathematics for Data Science 2": "theory",
    "Statistics for Data Science 2": "theory",
    "English 2": "theory",
    "Intro to Python Programming": "python"
  },
  diploma: {
    "Database Management Systems": "theory",
    "Machine Learning Techniques": "theory",
    "Business Analytics": "theory",
    "Application Development": "theory"
  },
  degree: {
    "Advanced Machine Learning": "theory",
    "Deep Learning": "theory",
    "Big Data Analytics": "theory",
    "Software Engineering": "theory"
  }
};


/*************************************************
 * LEVEL TAB HANDLER
 *************************************************/

function selectLevel(level, event) {
  activeLevel = level;

  // Update tab UI safely
  document.querySelectorAll(".tab").forEach(tab =>
    tab.classList.remove("active")
  );
  if (event && event.target) {
    event.target.classList.add("active");
  }

  populateSubjectsForLevel(level);
}


/*************************************************
 * POPULATE SUBJECT DROPDOWN
 *************************************************/

function populateSubjectsForLevel(level) {
  const subjectSelect = document.getElementById("subjectSelect");
  const inputsDiv = document.getElementById("dynamicInputs");
  const result = document.getElementById("result");

  subjectSelect.innerHTML = '<option value="">-- Select Subject --</option>';
  subjectSelect.disabled = false;
  inputsDiv.innerHTML = "";
  result.innerText = "";

  Object.keys(subjectsByLevel[level]).forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}


/*************************************************
 * UPDATE INPUT FIELDS BASED ON SUBJECT
 *************************************************/

function updateInputs() {
  const subject = document.getElementById("subjectSelect").value;
  const inputsDiv = document.getElementById("dynamicInputs");
  const result = document.getElementById("result");

  inputsDiv.innerHTML = "";
  result.innerText = "";

  if (!subject) return;

  const type = subjectsByLevel[activeLevel][subject];

  if (type === "theory") {
    inputsDiv.innerHTML = `
      <label>Quiz 1 Score</label><br>
      <input type="number" id="quiz1" min="0" max="100" oninput="clampScore(this)"><br><br>

      <label>Quiz 2 Score</label><br>
      <input type="number" id="quiz2" min="0" max="100" oninput="clampScore(this)"><br><br>
    `;
  }

  if (type === "python") {
    inputsDiv.innerHTML = `
      <label>Quiz 1 Score</label><br>
      <input type="number" id="quiz1" min="0" max="100" oninput="clampScore(this)"><br><br>

      <label>OPPE 1 Score</label><br>
      <input type="number" id="oppe1" min="0" max="100" oninput="clampScore(this)"><br><br>

      <label>OPPE 2 Score</label><br>
      <input type="number" id="oppe2" min="0" max="100" oninput="clampScore(this)"><br><br>
    `;
  }
}


/*************************************************
 * END-TERM SCORE PREDICTION (HEURISTIC)
 *************************************************/

function predictMarks() {
  const subject = document.getElementById("subjectSelect").value;
  const result = document.getElementById("result");

  if (!subject) {
    result.innerText = "Please select a subject.";
    return;
  }

  const type = subjectsByLevel[activeLevel][subject];
  let scores = [];

  function valid(v, label) {
    if (isNaN(v) || v < 0 || v > 100) {
      result.innerText = `${label} must be between 0 and 100.`;
      return false;
    }
    return true;
  }

  if (type === "theory") {
    const q1 = Number(document.getElementById("quiz1").value);
    const q2 = Number(document.getElementById("quiz2").value);
    if (!valid(q1, "Quiz 1") || !valid(q2, "Quiz 2")) return;
    scores = [q1, q2];
  }

  if (type === "python") {
    const q1 = Number(document.getElementById("quiz1").value);
    const p1 = Number(document.getElementById("oppe1").value);
    const p2 = Number(document.getElementById("oppe2").value);
    if (!valid(q1, "Quiz 1") || !valid(p1, "OPPE 1") || !valid(p2, "OPPE 2")) return;
    scores = [q1, p1, p2];
  }

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const lower = Math.max(0, avg - 7);
  const upper = Math.min(100, avg + 7);

  result.innerText =
    `📊 Based on your performance, your expected End-Term score is between ${lower.toFixed(1)} and ${upper.toFixed(1)}.`;
}


/*************************************************
 * LIVE INPUT CLAMPING (0–100)
 *************************************************/

function clampScore(input) {
  let v = Number(input.value);
  if (isNaN(v)) {
    input.value = "";
    return;
  }

  if (v < 0) v = 0;
  if (v > 100) v = 100;
  input.value = v;
}

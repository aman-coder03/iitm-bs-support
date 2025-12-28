/************************************
 * STATE
 ************************************/

let selectedLevel = "foundation";
let addedCourses = [];

/************************************
 * ELEMENTS
 ************************************/

const levelSelect = document.getElementById("levelSelect");
const courseSelect = document.getElementById("courseSelect");
const inputBox = document.getElementById("dynamicInputs");
const tableBody = document.getElementById("courseTable");
const cgpaValue = document.getElementById("cgpaValue");

/************************************
 * INIT
 ************************************/

if (levelSelect) {
  levelSelect.value = "foundation";
  levelSelect.addEventListener("change", () => {
    selectedLevel = levelSelect.value;
    addedCourses = [];
    renderTable();
    updateCGPA();
    loadCourses();
    inputBox.innerHTML = "";
  });
}

loadCourses();

/************************************
 * LOAD COURSES
 ************************************/

function loadCourses() {
  courseSelect.innerHTML = `<option value="">Select course</option>`;

  Object.entries(COURSE_DATA[selectedLevel]).forEach(([code, course]) => {
    if (!addedCourses.find(c => c.code === code)) {
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = course.name;
      courseSelect.appendChild(opt);
    }
  });
}

/************************************
 * SHOW INPUTS (WITH CLAMPING)
 ************************************/

courseSelect.addEventListener("change", () => {
  inputBox.innerHTML = "";

  const rule = COURSE_DATA[selectedLevel][courseSelect.value];
  if (!rule) return;

  rule.inputs.forEach(key => {
    const input = document.createElement("input");
    input.type = "number";
    input.id = key;
    input.placeholder = key.toUpperCase();
    input.min = 0;
    input.step = "any";

    // Default max
    input.max = 100;

    // Bonus-specific cap
    if (key.toLowerCase().includes("bonus")) {
      input.max = rule.bonusCap ?? 5;
    }

    // Clamp while typing
    input.addEventListener("input", () => {
      if (input.value === "") return;

      let val = Number(input.value);
      if (isNaN(val)) val = 0;

      if (val < input.min) val = input.min;
      if (val > input.max) val = input.max;

      input.value = val;
    });

    inputBox.appendChild(input);
  });
});

/************************************
 * GRADE MAP
 ************************************/

function gradeFromScore(score) {
  if (score >= 90) return { grade: "S", points: 10 };
  if (score >= 80) return { grade: "A", points: 9 };
  if (score >= 70) return { grade: "B", points: 8 };
  if (score >= 60) return { grade: "C", points: 7 };
  if (score >= 50) return { grade: "D", points: 6 };
  if (score >= 40) return { grade: "E", points: 4 };
  return { grade: "U", points: 0 };
}

/************************************
 * ADD COURSE (HARD CLAMP)
 ************************************/

function addCourse() {
  const code = courseSelect.value;
  if (!code) return alert("Select a course");

  const rule = COURSE_DATA[selectedLevel][code];
  const values = {};

  rule.inputs.forEach(k => {
    let val = Number(document.getElementById(k)?.value || 0);

    if (isNaN(val)) val = 0;
    val = Math.max(0, Math.min(val, 100));

    // Bonus-specific clamp
    if (k.toLowerCase().includes("bonus") && rule.bonusCap !== undefined) {
      val = Math.min(val, rule.bonusCap);
    }

    values[k] = val;
  });

  const rawScore = rule.calculate(values);
  const finalScore = Math.min(rawScore, 100);
  const gradeData = gradeFromScore(finalScore);

  addedCourses.push({
    code,
    name: rule.name,
    credits: rule.credits,
    score: finalScore.toFixed(1),
    grade: gradeData.grade,
    points: gradeData.points
  });

  inputBox.innerHTML = "";
  courseSelect.value = "";

  renderTable();
  updateCGPA();
  loadCourses();
}

/************************************
 * TABLE
 ************************************/

function renderTable() {
  tableBody.innerHTML = "";

  addedCourses.forEach((c, i) => {
    tableBody.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.score}</td>
        <td>${c.grade}</td>
        <td>${c.points}</td>
        <td>${c.credits}</td>
        <td>
          <button onclick="removeCourse(${i})">✖</button>
        </td>
      </tr>
    `;
  });
}

/************************************
 * REMOVE COURSE
 ************************************/

function removeCourse(index) {
  addedCourses.splice(index, 1);
  renderTable();
  updateCGPA();
  loadCourses();
}

/************************************
 * CGPA
 ************************************/

function updateCGPA() {
  let totalPoints = 0;
  let totalCredits = 0;

  addedCourses.forEach(c => {
    totalPoints += c.points * c.credits;
    totalCredits += c.credits;
  });

  cgpaValue.innerText =
    totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
}

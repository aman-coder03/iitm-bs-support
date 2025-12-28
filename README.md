# IITM BS Support

IITM BS Support is a student-built, browser-based platform that provides academic assistance tools for students enrolled in the IIT Madras Bachelor of Science (BS) Programme. The project aims to simplify common academic calculations and reduce ambiguity around grades, CGPA, and exam performance using clear, accurate, and easily accessible tools.

The platform is intentionally designed to be lightweight, privacy-focused, and fully client-side, requiring no login, backend services, or data storage.

---

## Project Motivation

Students in the IIT Madras BS programme frequently need to:
- Calculate CGPA accurately across different program levels
- Convert marks into grades using the official grading scheme
- Estimate end-term performance based on internal assessments

These tasks are often repetitive and error-prone when done manually. IITM BS Support centralizes these calculations into a single platform to help students make informed academic decisions quickly and reliably.

---

## Intended Audience

This project is intended for:
- Students enrolled in the IIT Madras BS programme (Foundation, Diploma, and Degree levels)
- Learners who want quick academic clarity without complex tools or spreadsheets
- Contributors interested in educational, student-focused open-source projects

---

## Tools Provided

### CGPA Calculator

The CGPA Calculator allows students to compute their cumulative grade point average using course credits and grades.

Details:
- Supports Foundation, Diploma, and Degree program structures
- Uses credit-weighted GPA calculation
- Provides instant results within the browser

---

### Grade Calculator

The Grade Calculator converts raw marks into grades based on the IIT Madras grading scale.

Details:
- Simple mark-based input
- Maps marks to grades accurately
- Does not require login or data submission

---

### End-Term Marks Predictor

The End-Term Marks Predictor estimates expected end-term exam scores using internal assessment data such as quizzes and OPPEs.

Details:
- Supports subject-wise prediction
- Works for both theory and programming courses
- Useful for academic planning and performance evaluation

---

## Key Characteristics

- Fully client-side implementation using HTML, CSS, and JavaScript
- No backend, authentication, or data persistence
- Fast load times and minimal dependencies
- Responsive layout suitable for desktop and mobile browsers
- Free to use and open for community contributions

---

## Repository Structure

    iitm-bs-support/
    ├── css/                Stylesheets for layout and design
    ├── js/                 JavaScript logic for calculations
    ├── pages/              Static informational pages
    │   ├── about.html
    │   ├── privacy-policy.html
    │   ├── terms-of-use.html
    │   └── disclaimer.html
    ├── tools/              Individual academic tools
    │   ├── cgpa-calculator.html
    │   ├── grade-calculator.html
    │   └── endterm-predictor.html
    ├── index.html          Main landing page
    ├── tools.html          Tools overview page
    ├── README.md           Project documentation
    └── CONTRIBUTING.md     Contribution guidelines

---

## Usage Instructions

1. Clone or download the repository:

        git clone https://github.com/aman-coder03/iitm-bs-support.git

2. Open the `index.html` file in any modern web browser.
3. Navigate to the Tools section.
4. Select the required tool and use it directly.

No installation steps, backend configuration, or additional setup is required.

---

## Documentation Overview

- README.md provides an overview of the project, its purpose, and available tools.
- CONTRIBUTING.md outlines contribution guidelines, workflow, and best practices for collaborators.

---

## Contribution Policy

Contributions are encouraged, especially in areas such as:
- Improving documentation clarity
- Enhancing UI or user experience
- Fixing bugs or edge cases in calculations
- Adding new academic tools relevant to the IIT Madras BS curriculum

Please refer to CONTRIBUTING.md before submitting a pull request.

---

## Disclaimer

This project is a student-led initiative and is not affiliated with or officially endorsed by IIT Madras. All calculations and predictions are intended for informational and planning purposes only. Students should always verify important academic decisions with official IIT Madras resources.

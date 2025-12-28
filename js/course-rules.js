/*************************************************
 * IITM BS — COURSE RULES (FOUNDATION + DIPLOMA)
 *************************************************/

const COURSE_DATA = {

  /* =====================================================
     FOUNDATION LEVEL (already correct, unchanged)
     ===================================================== */
  foundation: {

    math1: {
      name: "Mathematics for Data Science I",
      credits: 4,
      inputs: ["qz1", "qz2", "end"],
      calculate: ({ qz1, qz2, end }) =>
        Math.max(
          0.6 * end + 0.3 * Math.max(qz1, qz2),
          0.45 * end + 0.25 * qz1 + 0.3 * qz2
        )
    },

    math2: {
      name: "Mathematics for Data Science II",
      credits: 4,
      inputs: ["qz1", "qz2", "end", "bonus"],
      bonusCap: 6,
      calculate: ({ qz1, qz2, end, bonus = 0 }) =>
        Math.min(
          Math.max(
            0.6 * end + 0.3 * Math.max(qz1, qz2),
            0.45 * end + 0.25 * qz1 + 0.3 * qz2
          ) + Math.min(bonus, 6),
          100
        )
    },

    stats1: {
      name: "Statistics for Data Science I",
      credits: 4,
      inputs: ["qz1", "qz2", "end", "bonus"],
      bonusCap: 5,
      calculate: ({ qz1, qz2, end, bonus = 0 }) =>
        Math.max(
          0.6 * end + 0.3 * Math.max(qz1, qz2),
          0.45 * end + 0.25 * qz1 + 0.3 * qz2
        ) + Math.min(bonus, 5)
    },

    stats2: {
      name: "Statistics for Data Science II",
      credits: 4,
      inputs: ["qz1", "qz2", "end", "bonus"],
      bonusCap: 5,
      calculate: ({ qz1, qz2, end, bonus = 0 }) =>
        Math.max(
          0.6 * end + 0.3 * Math.max(qz1, qz2),
          0.45 * end + 0.25 * qz1 + 0.3 * qz2
        ) + Math.min(bonus, 5)
    },

    ct: {
      name: "Computational Thinking",
      credits: 4,
      inputs: ["qz1", "qz2", "end"],
      calculate: ({ qz1, qz2, end }) =>
        Math.max(
          0.6 * end + 0.3 * Math.max(qz1, qz2),
          0.45 * end + 0.25 * qz1 + 0.3 * qz2
        )
    },

    python: {
    name: "Python Programming",
    credits: 4,
    inputs: ["Qz1", "PE1", "PE2", "F", "bonus"],
    bonusCap: 5,
    calculate: ({ Qz1, PE1, PE2, F, bonus = 0 }) => {
        const maxPE = Math.max(PE1, PE2);
        const minPE = Math.min(PE1, PE2);

        return (
        0.15 * Qz1 +
        0.4 * F +
        0.25 * maxPE +
        0.2 * minPE
        );
    }
    },

    eng1: {
      name: "English I",
      credits: 4,
      inputs: ["qz1", "qz2", "end"],
      calculate: ({ qz1, qz2, end }) =>
        Math.max(
          0.6 * end + 0.3 * Math.max(qz1, qz2),
          0.45 * end + 0.25 * qz1 + 0.3 * qz2
        )
    },

    eng2: {
      name: "English II",
      credits: 4,
      inputs: ["qz1", "qz2", "end"],
      calculate: ({ qz1, qz2, end }) =>
        Math.max(
          0.6 * end + 0.3 * Math.max(qz1, qz2),
          0.45 * end + 0.25 * qz1 + 0.3 * qz2
        )
    }
  },

  /* =====================================================
     DIPLOMA LEVEL — ALL 13 COURSES
     ===================================================== */
  diploma: {

    /* 1 */ MLF: {
      name: "Machine Learning Foundations",
      credits: 4,
      inputs: ["gaa", "qz1", "qz2", "end"],
      calculate: ({ gaa, qz1, qz2, end }) =>
        0.05 * gaa +
        Math.max(
          0.6 * end + 0.25 * Math.max(qz1, qz2),
          0.4 * end + 0.25 * qz1 + 0.3 * qz2
        )
    },

    /* 2 */ MLT: {
      name: "Machine Learning Techniques",
      credits: 4,
      inputs: ["gaa", "qz1", "qz2", "end", "bonus"],
      bonusCap: 3,
      calculate: ({ gaa, qz1, qz2, end, bonus = 0 }) =>
        0.05 * gaa +
        Math.max(
          0.6 * end + 0.25 * Math.max(qz1, qz2),
          0.4 * end + 0.25 * qz1 + 0.3 * qz2
        ) +
        Math.min(bonus, 3)
    },

    /* 3 */ MLP: {
      name: "Machine Learning Practice",
      credits: 4,
      inputs: ["gaa", "oppe1", "oppe2", "ka", "end"],
      calculate: ({ gaa, oppe1, oppe2, ka, end }) =>
        0.1 * gaa +
        0.3 * end +
        0.2 * oppe1 +
        0.2 * oppe2 +
        0.2 * ka
    },

    /* 4 */ BDM: {
      name: "Business Data Management",
      credits: 4,
      inputs: ["ga", "qz2", "ta", "end"],
      calculate: ({ ga, qz2, ta, end }) =>
        ga + qz2 + ta + end
    },

    /* 5 */ BA: {
      name: "Business Analytics",
      credits: 4,
      inputs: ["qz1", "qz2", "a1", "a2", "a3", "end"],
      calculate: ({ qz1, qz2, a1, a2, a3, end }) => {
        const qz = 0.7 * Math.max(qz1, qz2) + 0.3 * Math.min(qz1, qz2);
        const a = [a1, a2, a3].sort((x, y) => y - x).slice(0, 2).reduce((s, v) => s + v, 0);
        return qz + a + Math.min(end, 40);
      }
    },

    /* 6 */ TDS: {
      name: "Tools in Data Science",
      credits: 3,
      inputs: ["gaa", "roe", "p1", "p2", "end"],
      calculate: ({ gaa, roe, p1, p2, end }) =>
        0.1 * gaa +
        0.2 * roe +
        0.2 * p1 +
        0.2 * p2 +
        0.3 * end
    },

    /* 7 */ PDSA: {
      name: "Programming, Data Structures & Algorithms using Python",
      credits: 4,
      inputs: ["gaa", "oppe", "qz1", "qz2", "end"],
      calculate: ({ gaa, oppe, qz1, qz2, end }) =>
        0.05 * gaa +
        0.2 * oppe +
        0.45 * end +
        Math.max(
          0.2 * Math.max(qz1, qz2),
          0.1 * qz1 + 0.2 * qz2
        )
    },

    /* 8 */ DBMS: {
      name: "Database Management Systems",
      credits: 4,
      inputs: ["gaa2", "gaa3", "oppe", "qz1", "qz2", "end"],
      calculate: ({ gaa2, gaa3, oppe, qz1, qz2, end }) =>
        0.03 * gaa2 +
        0.02 * gaa3 +
        0.2 * oppe +
        0.45 * end +
        Math.max(
          0.2 * Math.max(qz1, qz2),
          0.1 * qz1 + 0.2 * qz2
        )
    },

    /* 9 */ AD1: {
      name: "Application Development I",
      credits: 4,
      inputs: ["gla", "qz1", "qz2", "end"],
      calculate: ({ gla, qz1, qz2, end }) =>
        0.05 * gla +
        Math.max(
          0.6 * end + 0.25 * Math.max(qz1, qz2),
          0.4 * end + 0.25 * qz1 + 0.3 * qz2
        )
    },

    /* 10 */ JAVA: {
      name: "Programming Concepts using Java",
      credits: 4,
      inputs: ["gaa", "pe1", "pe2", "qz1", "qz2", "end"],
      calculate: ({ gaa, pe1, pe2, qz1, qz2, end }) =>
        0.05 * gaa +
        0.2 * Math.max(pe1, pe2) +
        0.45 * end +
        Math.max(
          0.2 * Math.max(qz1, qz2),
          0.1 * qz1 + 0.2 * qz2
        ) +
        0.1 * Math.min(pe1, pe2)
    },

    /* 11 */ SC: {
      name: "System Commands",
      credits: 3,
      inputs: ["gaa", "bpta", "qz1", "oppe", "end"],
      calculate: ({ gaa, bpta, qz1, oppe, end }) =>
        0.05 * gaa +
        0.1 * bpta +
        0.25 * qz1 +
        0.3 * oppe +
        0.3 * end
    },

    /* 12 */ AD2: {
      name: "Application Development II",
      credits: 4,
      inputs: ["gaa", "qz1", "qz2", "end"],
      calculate: ({ gaa, qz1, qz2, end }) =>
        0.05 * gaa +
        Math.max(
          0.6 * end + 0.25 * Math.max(qz1, qz2),
          0.4 * end + 0.25 * qz1 + 0.3 * qz2
        )
    },

    /* 13 */ DLGAI: {
      name: "Introduction to Deep Learning and Generative AI",
      credits: 4,
      inputs: ["gaa", "qz1", "qz2", "nppe1", "nppe2", "end"],
      calculate: ({ gaa, qz1, qz2, nppe1, nppe2, end }) =>
        0.1 * gaa +
        0.2 * qz1 +
        0.2 * qz2 +
        0.25 * end +
        0.1 * nppe1 +
        0.15 * nppe2
    }
  }
};

/*************************************************
 * GRADE SCALE (GLOBAL)
 *************************************************/
const GRADE_SCALE = [
  { min: 90, grade: "S", points: 10 },
  { min: 80, grade: "A", points: 9 },
  { min: 70, grade: "B", points: 8 },
  { min: 60, grade: "C", points: 7 },
  { min: 50, grade: "D", points: 6 },
  { min: 40, grade: "E", points: 4 },
  { min: 0, grade: "U", points: 0 }
];

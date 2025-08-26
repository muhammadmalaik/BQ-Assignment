// import { useState } from "react";
// import Swal from "sweetalert2";
// import "./App.css";

// const questions = [
//   { question: "Q1: HTML Stands for?", option1: "Hyper Text Markup Language", option2: "Hyper Tech Markup Language", option3: "Hyper Touch Markup Language", corrAnswer: "Hyper Text Markup Language" },
//   { question: "Q2: CSS Stands for", option1: "Cascoding Style Sheets", option2: "Cascading Style Sheets", option3: "Cascating Style Sheets", corrAnswer: "Cascading Style Sheets" },
//   { question: "Q3: Which tag is used for most large heading", option1: "<h6>", option2: "<h2>", option3: "<h1>", corrAnswer: "<h1>" },
//   { question: "Q4: Which tag is used to make element unique ", option1: "id", option2: "class", option3: "label", corrAnswer: "id" },
//   { question: "Q5: Any element assigned with id, can be get in css ", option1: "by # tag", option2: "by @ tag", option3: "by & tag", corrAnswer: "by # tag" },
// ];

// export default function App() {
//   const [index, setIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selected, setSelected] = useState("");

//   const handleNext = () => {
//     if (selected === questions[index].corrAnswer) {
//       setScore(score + 1);
//     }
//     setSelected("");
//     if (index + 1 < questions.length) {
//       setIndex(index + 1);
//     } else {
//       showResult();
//     }
//   };

//   const showResult = () => {
//     const scorePercent = ((score / questions.length) * 100).toFixed(2);
//     let title = "";
//     let icon = "";

//     if (scorePercent >= 80) {
//       title = "Excellent!";
//       icon = "success";
//     } else if (scorePercent >= 60) {
//       title = "Good!";
//       icon = "info";
//     } else if (scorePercent >= 40) {
//       title = "Fair";
//       icon = "warning";
//     } else {
//       title = "Keep Trying";
//       icon = "error";
//     }

//     Swal.fire(title, `You scored ${scorePercent}%.`, icon).then(() => {
//       // Reset quiz after alert closes
//       setIndex(0);
//       setScore(0);
//       setSelected("");
//     });
//   };

//   const q = questions[index];
//   const progress = ((index + 1) / questions.length) * 100; // Progress bar logic

//   return (
//     <div className="quiz-container">
//       <h1 className="title">Quiz App</h1>

//       {/* Progress Bar */}
//       <div className="progress-bar">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>

//       <p className="question">{q.question}</p>
//       <div className="options">
//         {[q.option1, q.option2, q.option3].map((opt) => (
//           <label key={opt} className={`option ${selected === opt ? "selected" : ""}`}>
//             <input
//               type="radio"
//               name="option"
//               value={opt}
//               checked={selected === opt}
//               onChange={(e) => setSelected(e.target.value)}
//             />
//             {opt}
//           </label>
//         ))}
//       </div>


//       <button onClick={handleNext} disabled={!selected} className="next-btn">
//         {index + 1 === questions.length ? "Finish" : "Next"}
//       </button>
//     </div>
//   );
// }





import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

const questions = [
  { q: "HTML stands for?", options: ["Hyper Text Markup Language", "Hyper Tech Markup Language", "Hyper Touch Markup Language"], ans: "Hyper Text Markup Language" },
  { q: "CSS stands for?", options: ["Cascoding Style Sheets", "Cascading Style Sheets", "Cascating Style Sheets"], ans: "Cascading Style Sheets" },
  { q: "Which tag is used for largest heading?", options: ["<h6>", "<h2>", "<h1>"], ans: "<h1>" },
  { q: "Which attribute makes an element unique?", options: ["id", "class", "label"], ans: "id" },
  { q: "Element with id can be targeted in CSS using?", options: ["#", "@", "&"], ans: "#" },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");

  const nextQuestion = () => {
    if (selected === questions[index].ans) setScore(score + 1);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected("");
    } else {
      showResult();
    }
  };

  const showResult = () => {
    const percent = ((score + (selected === questions[index].ans ? 1 : 0)) / questions.length) * 100;
    let title = percent >= 80 ? "Excellent!" : percent >= 60 ? "Good!" : percent >= 40 ? "Fair" : "Keep Trying";
    let icon = percent >= 80 ? "success" : percent >= 60 ? "info" : percent >= 40 ? "warning" : "error";

    Swal.fire(title, `You scored ${percent.toFixed(2)}%.`, icon).then(() => {
      setIndex(0);
      setScore(0);
      setSelected("");
    });
  };

  const q = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h1 className="title">Quiz App</h1>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="question">{q.q}</p>
      <div className="options">
        {q.options.map((opt) => (
          <label key={opt} className={`option ${selected === opt ? "selected" : ""}`}>
            <input type="radio" name="option" value={opt} checked={selected === opt} onChange={() => setSelected(opt)} />
            {opt}
          </label>
        ))}
      </div>

      <button onClick={nextQuestion} disabled={!selected} className="next-btn">
        {index + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}

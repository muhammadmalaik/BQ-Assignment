// import React, { useState } from "react";
// import "./App.css";

// export default function StudentFeedbackForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     course: "",
//     instructor: "",
//     semester: "",
//     year: "",
//     rating: "",
//     difficulty: "",
//     comments: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const courseList = [
//     "Intro to Programming",
//     "Web Development",
//     "AI",
//     "Machine Learning",
//     "Digital Marketing",
//   ];

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   function validate() {
//     let errs = {};
//     if (!formData.name.trim()) errs.name = "Name is required";
//     if (!formData.course.trim()) errs.course = "Course is required";
//     if (!formData.instructor.trim()) errs.instructor = "Instructor is required";
//     if (!formData.semester.trim()) errs.semester = "Semester is required";
//     if (!formData.year.trim()) errs.year = "Year of Study is required";
//     if (!formData.rating) errs.rating = "Please select rating";
//     if (!formData.difficulty) errs.difficulty = "Please select difficulty";
//     return errs;
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const errs = validate();
//     setErrors(errs);
//     if (Object.keys(errs).length === 0) {
//       setSubmitted(true);
//       console.log("Feedback submitted:", formData);
//     }
//   }

//   function handleReset() {
//     setFormData({
//       name: "",
//       email: "",
//       course: "",
//       instructor: "",
//       semester: "",
//       year: "",
//       rating: "",
//       difficulty: "",
//       comments: "",
//     });
//     setErrors({});
//     setSubmitted(false);
//   }

//   return (
//     <div className="form-container">
//       <h2>Student Feedback Form</h2>

//       {submitted && (
//         <div className="success-banner">✅ Feedback Submitted Successfully!</div>
//       )}

//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email address"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Course */}
//         <div className="form-group">
//           <label>Course:</label>
//           <select name="course" value={formData.course} onChange={handleChange}>
//             <option value="">-- Select Course --</option>
//             {courseList.map((c, index) => (
//               <option key={index} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//           {errors.course && <span className="error">{errors.course}</span>}
//         </div>

//         {/* Instructor */}
//         <div className="form-group">
//           <label>Instructor:</label>
//           <input
//             type="text"
//             name="instructor"
//             placeholder="Enter instructor name"
//             value={formData.instructor}
//             onChange={handleChange}
//           />
//           {errors.instructor && <span className="error">{errors.instructor}</span>}
//         </div>

//         {/* Semester */}
//         <div className="form-group">
//           <label>Semester:</label>
//           <input
//             type="text"
//             name="semester"
//             placeholder="e.g., Fall 2025"
//             value={formData.semester}
//             onChange={handleChange}
//           />
//           {errors.semester && <span className="error">{errors.semester}</span>}
//         </div>

//         {/* Year of Study */}
//         <div className="form-group">
//           <label>Year of Study:</label>
//           <select name="year" value={formData.year} onChange={handleChange}>
//             <option value="">-- Select Year --</option>
//             <option value="1st Year">1st Year</option>
//             <option value="2nd Year">2nd Year</option>
//             <option value="3rd Year">3rd Year</option>
//             <option value="4th Year">4th Year</option>
//           </select>
//           {errors.year && <span className="error">{errors.year}</span>}
//         </div>

//         {/* Rating */}
//         <div className="form-group">
//           <label>Rating:</label>
//           <div className="rating-options">
//             {[1, 2, 3, 4, 5].map((num) => (
//               <label key={num}>
//                 <input
//                   type="radio"
//                   name="rating"
//                   value={num}
//                   checked={formData.rating === String(num)}
//                   onChange={handleChange}
//                 />
//                 {num} ★
//               </label>
//             ))}
//           </div>
//           {errors.rating && <span className="error">{errors.rating}</span>}
//         </div>

//         {/* Difficulty */}
//         <div className="form-group">
//           <label>Course Difficulty:</label>
//           <select
//             name="difficulty"
//             value={formData.difficulty}
//             onChange={handleChange}
//           >
//             <option value="">-- Select Difficulty --</option>
//             <option value="Easy">Easy</option>
//             <option value="Moderate">Moderate</option>
//             <option value="Hard">Hard</option>
//           </select>
//           {errors.difficulty && (
//             <span className="error">{errors.difficulty}</span>
//           )}
//         </div>

//         {/* Comments */}
//         <div className="form-group">
//           <label>Comments:</label>
//           <textarea
//             name="comments"
//             placeholder="Write your feedback here..."
//             value={formData.comments}
//             onChange={handleChange}
//           ></textarea>
//         </div>

//         {/* Buttons */}
//         <div className="form-actions">
//           <button type="submit">Submit</button>
//           <button type="button" onClick={handleReset} className="reset-btn">
//             Reset
//           </button>
//         </div>
//       </form>

//       {/* Preview */}
//       {submitted && (
//         <div className="preview">
//           <h3>Submission Preview</h3>
//           <p>
//             <strong>Name:</strong> {formData.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {formData.email || "—"}
//           </p>
//           <p>
//             <strong>Course:</strong> {formData.course}
//           </p>
//           <p>
//             <strong>Instructor:</strong> {formData.instructor}
//           </p>
//           <p>
//             <strong>Semester:</strong> {formData.semester}
//           </p>
//           <p>
//             <strong>Year of Study:</strong> {formData.year}
//           </p>
//           <p>
//             <strong>Rating:</strong> {"★".repeat(Number(formData.rating)) || "—"}
//           </p>
//           <p>
//             <strong>Difficulty:</strong> {formData.difficulty}
//           </p>
//           <p>
//             <strong>Comments:</strong> {formData.comments || "—"}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState } from "react";
import "./App.css";

export default function StudentFeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    instructor: "",
    semester: "",
    year: "",
    rating: "",
    difficulty: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]); // ✅ multiple submissions store
  const [editIndex, setEditIndex] = useState(null); // ✅ track kis card ko edit karna hai

  const courseList = [
    "Intro to Programming",
    "Web Development",
    "AI",
    "Machine Learning",
    "Digital Marketing",
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    let errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.course.trim()) errs.course = "Course is required";
    if (!formData.instructor.trim()) errs.instructor = "Instructor is required";
    if (!formData.semester.trim()) errs.semester = "Semester is required";
    if (!formData.year.trim()) errs.year = "Year of Study is required";
    if (!formData.rating) errs.rating = "Please select rating";
    if (!formData.difficulty) errs.difficulty = "Please select difficulty";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      if (editIndex !== null) {
        // ✅ Update existing submission
        const updated = [...submissions];
        updated[editIndex] = formData;
        setSubmissions(updated);
        setEditIndex(null);
      } else {
        // ✅ Add new submission
        setSubmissions([...submissions, formData]);
      }

      // Reset form after submit
      setFormData({
        name: "",
        email: "",
        course: "",
        instructor: "",
        semester: "",
        year: "",
        rating: "",
        difficulty: "",
        comments: "",
      });
    }
  }

  function handleReset() {
    setFormData({
      name: "",
      email: "",
      course: "",
      instructor: "",
      semester: "",
      year: "",
      rating: "",
      difficulty: "",
      comments: "",
    });
    setErrors({});
    setEditIndex(null);
  }

  function handleEdit(index) {
    setFormData(submissions[index]); // ✅ bring old data back into form
    setEditIndex(index); // ✅ mark that this is editing
  }

  return (
    <div className="form-container">
      <h2>Student Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Course */}
        <div className="form-group">
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">-- Select Course --</option>
            {courseList.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </div>

        {/* Instructor */}
        <div className="form-group">
          <label>Instructor:</label>
          <input
            type="text"
            name="instructor"
            placeholder="Enter instructor name"
            value={formData.instructor}
            onChange={handleChange}
          />
          {errors.instructor && <span className="error">{errors.instructor}</span>}
        </div>

        {/* Semester */}
        <div className="form-group">
          <label>Semester:</label>
          <input
            type="text"
            name="semester"
            placeholder="e.g., Fall 2025"
            value={formData.semester}
            onChange={handleChange}
          />
          {errors.semester && <span className="error">{errors.semester}</span>}
        </div>

        {/* Year */}
        <div className="form-group">
          <label>Year of Study:</label>
          <select name="year" value={formData.year} onChange={handleChange}>
            <option value="">-- Select Year --</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
          {errors.year && <span className="error">{errors.year}</span>}
        </div>

        {/* Rating */}
        <div className="form-group">
          <label>Rating:</label>
          <div className="rating-options">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num}>
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={formData.rating === String(num)}
                  onChange={handleChange}
                />
                {num} ★
              </label>
            ))}
          </div>
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>

        {/* Difficulty */}
        <div className="form-group">
          <label>Course Difficulty:</label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">-- Select Difficulty --</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
          {errors.difficulty && (
            <span className="error">{errors.difficulty}</span>
          )}
        </div>

        {/* Comments */}
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            placeholder="Write your feedback here..."
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      </form>

      {/* ✅ Preview Cards */}
      <div className="submissions-list">
        {submissions.map((data, index) => (
          <div key={index} className="preview-card">
            <h3>Feedback #{index + 1}</h3>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email || "—"}</p>
            <p><strong>Course:</strong> {data.course}</p>
            <p><strong>Instructor:</strong> {data.instructor}</p>
            <p><strong>Semester:</strong> {data.semester}</p>
            <p><strong>Year of Study:</strong> {data.year}</p>
            <p><strong>Rating:</strong> {"★".repeat(Number(data.rating)) || "—"}</p>
            <p><strong>Difficulty:</strong> {data.difficulty}</p>
            <p><strong>Comments:</strong> {data.comments || "—"}</p>
            <button onClick={() => handleEdit(index)}>✏️ Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

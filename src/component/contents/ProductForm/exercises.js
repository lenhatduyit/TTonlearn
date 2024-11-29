import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import axios from "axios"; // Import axios for API calls
import "../Css/product.css"; // Import styles
import "../Css/ex.css";
const Exercises = () => {
  const { topic_id } = useParams(); // Retrieve topic_id from the route
  const [exercises, setExercises] = useState([]); // State for exercises
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    // Fetch exercises based on topic_id
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/exercises/${topic_id}`);
        setExercises(response.data); // Save exercises to state
      } catch (err) {
        console.error("Error fetching exercises:", err);
        setError("Không thể tải bài tập."); // Set error message
      }
    };

    fetchExercises();
  }, [topic_id]);

  if (error) return <div>{error}</div>; // Show error message if there's an error

  return (
    <div className="main">
        <div className="exercise-container">
        <h1>Danh sách bài tập</h1>
        <ul>
            {exercises.map((exercise) => (
            <li key={exercise.id}>{exercise.title}</li> // Render exercise titles
            ))}
        </ul>
        </div>
    </div>
  );
};

export default Exercises;

import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    description: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movie);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input placeholder="Title" onChange={(e) => setMovie({...movie, title: e.target.value})}/>
      <input placeholder="Rating" onChange={(e) => setMovie({...movie, rating: e.target.value})}/>
      <input placeholder="Image URL" onChange={(e) => setMovie({...movie, image: e.target.value})}/>
      <textarea placeholder="Description" onChange={(e) => setMovie({...movie, description: e.target.value})}/>
      <button>Add Movie</button>
    </form>
  );
}
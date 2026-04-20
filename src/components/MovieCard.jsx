import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export default function MovieCard({ movie }) {
  const { deleteMovie } = useContext(MovieContext);

  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />

      <h3>{movie.title}</h3>

      {/* ⭐ Star Rating */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={movie.rating >= star ? "star filled" : "star"}
          >
            
            ★
          </span>
        ))}
      </div>

      <div className="card-buttons">
        <Link to={`/movie/${movie.id}`}>
          <button className="view-btn">View</button>
        </Link>

        <button
          className="delete-btn"
          onClick={() => deleteMovie(movie.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
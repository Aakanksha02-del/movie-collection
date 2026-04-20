import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies } = useContext(MovieContext);

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie Not Found</h2>;

  return (
    <div className="details">
      <img src={movie.image} alt={movie.title} />

      <h2>{movie.title}</h2>

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

      <p className="description">{movie.description}</p>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}
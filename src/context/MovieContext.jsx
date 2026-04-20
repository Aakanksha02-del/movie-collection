import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      rating: 3,
      description: "Inception is a mind-bending sci-fi thriller directed by Christopher Nolan about a thief who enters dreams to steal secrets and is given a final mission to plant an idea deep within someone’s subconscious.",
      image: "https://tse4.mm.bing.net/th/id/OIP.A1N4GuF61vQC9mtbwW0uvwHaKj?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 2,
      title: "Interstellar",
      rating: 4,
      description: "Set in a future where Earth is dying, it follows former pilot Cooper who joins a space mission to find a new habitable planet for humanity. As he travels through wormholes and distant galaxies, he faces the emotional challenge of leaving his family behind, especially his daughter Murph.",
      image: "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg"
    },
    {
      id: 3,
      title: "The Dark Knight",
      rating: 5,
      description: "Batman faces his greatest challenge yet when the Joker unleashes chaos on Gotham City, forcing him to confront difficult choices between justice and sacrifice.",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      id: 4,
      title: "The Matrix",
      rating: 5,
      description: "A hacker discovers reality is a simulation.",
      image: "https://tse4.mm.bing.net/th/id/OIP.6V5E_59Ls8KdDoyKrSmvwQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 5,
      title: "Avatar",
      rating: 4,
      description: "It follows Neo, a hacker who discovers that reality is a simulated world controlled by machines and joins a rebellion to free humanity.",
      image: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"
    },
    {
      id: 6,
      title: "Titanic",
      rating: 2,
      description: "Titanic is a romantic disaster film directed by James Cameron.It tells the tragic love story of Jack and Rose aboard the ill-fated RMS Titanic as the ship sinks on its maiden voyage.",
      image: "https://alternativemovieposters.com/wp-content/uploads/2023/01/Glen-Matthew-Fechalin_TITANIC.jpg"
    },
    {
      id: 7,
      title: "Joker",
      rating: 5,
      description: "It follows Arthur Fleck, a struggling comedian whose descent into madness leads him to become the infamous Joker in Gotham City.",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      rating: 3,
      description: "Endgame follows the surviving Avengers as they unite for a final mission to undo Thanos’s destruction.Through time-travel and sacrifice, they fight to bring back their fallen allies and save the universe once and for all.",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
      id: 9,
      title: "Spider-Man",
      rating: 4,
      description: "It follows Peter Parker, a teenager who gains spider-like powers and learns that with great power comes great responsibility.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a8b0fd132117385.61a2ad5d83d0f.png"
    },
    {
      id: 10,
      title: "Doctor Strange",
      rating: 5,
      description: "It follows brilliant surgeon Stephen Strange, who discovers the mystical arts after a life-changing accident and becomes a powerful sorcerer protecting Earth from dark forces.",
      image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
    }
  ]);

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);
  };

  return (
    <MovieContext.Provider value={{ movies, deleteMovie, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
}
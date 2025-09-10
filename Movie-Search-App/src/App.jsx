import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "79e7cb61fc04fde89273146be94c8838"; 

  const fetchMovies = async () => {
    if (!search.trim()) return; 
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovies(data.results || []);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  //  Autocomplete suggestions
  const fetchSuggestions = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await res.json();
      setSuggestions(data.results ? data.results.slice(0, 5) : []); 
    } catch {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const fetchPopular = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError("Failed to load popular movies");
      }
      setLoading(false);
    };
    fetchPopular();
  }, []);

  return (
    <div className="app">
      <h1 className="title">🎬 Movie Search App</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            fetchSuggestions(e.target.value);
          }}
        />
        <button onClick={fetchMovies}>Search</button>

        {/* Suggestions Dropdown */}
{suggestions.length > 0 && (
  <ul className="suggestions">
    {suggestions.map((s) => (
      <li
        key={s.id}
        onClick={() => {
          setSearch(s.title);
          setSuggestions([]);
          setMovies([s]); 
        }}
      >
        {s.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w92${s.poster_path}`}
            alt={s.title}
            className="suggestion-img"
          />
        ) : (
          <div className="suggestion-no-img">🎬</div>
        )}
        <span className="suggestion-title">{s.title}</span>
      </li>
    ))}
  </ul>
)}

      </div>

      {/* Loading / Error */}
      {loading && <p className="loading">Loading movies...</p>}
      {error && <p className="error">❌ {error}</p>}

      {/* Movies Grid */}
      <div className="movie-grid">
        {!loading && !error && movies.length > 0 ? (
          movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <div className="no-image">No Image</div>
              )}
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>
                  ⭐ {movie.vote_average} | 📅{" "}
                  {movie.release_date || "Unknown"}
                </p>
                <p className="overview">
                  {movie.overview || "No description available."}
                </p>
              </div>
            </div>
          ))
        ) : (
          !loading &&
          !error && <p className="no-results">No movies found</p>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react"
import Movie from "../components/movie"
import "../style/Home.scss"

function Home () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect( () => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.3&sort_by=year")
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    })
  }, [])

    return (
        <div>
          <header>
            <h1>Best Movie World</h1>
            <div>
            <h3>
            An ever growing movie collection featuring some of the best scenes
            </h3>
            <p>
            “Best Movie world” is a collection of scenes are some of the most affecting in many movies. A lot of people have rated their favorite movies, and we are introducing movies with high ratings. Find a variety of movies that may interest you here.
            </p>
            <nav>
              <ul>
                <li>yeker</li>
                <li>https://github.com/yeker12</li>
                <li>yeker12@naver.com</li>
              </ul>
            </nav>
            </div>
          </header>
          <main>
            {loading ? (<h3 className="loading">LOADING...</h3>) : (
            <div className="movieContent">
              {movies.map( (movie) => (
                <Movie 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.large_cover_image}/>
              ))}
              </div>
              ) }
          </main>
        </div>
    )
};



export default Home;
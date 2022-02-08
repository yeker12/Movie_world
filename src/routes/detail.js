import { Link, useParams} from "react-router-dom"
import {useEffect, useState } from "react"
import "../style/detail.scss"

function Detail () {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    useEffect( () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then( (response) => response.json())
        .then( (json) => {
            setDetail(json.data.movie);
            setLoading(false);
        })
    }, []);
    console.log(detail);
    return (

        <div className="body_detail">
            <header>
            <h1>Best Movie World</h1>
            <div className="middle_title">
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
        <div className="main_detail">
            {loading ? (<h2 className="loading">LOADING...</h2>) : (
                <div className="movieContent">
                    <div className="movie">
                        <Link to="/" className="goBack">Go back</Link>
                        <h1 className="movie_title">{detail.title_long}</h1>
                        <p>
                            <img src={detail.large_cover_image}/>
                        </p>
                        <div className="contents">
                            <p className="info">Information</p>
                            <p className="year">Year: {detail.year}</p>
                            
                            <ul className="genres">
                                <li>Genres:</li> 
                                {detail.genres && detail.genres.map( (g) => <li key={g}>{g}</li>)}
                            </ul>
                            <p>RunTime: {detail.runtime} min</p>
                            <p>Rating: {detail.rating}</p>
                            <p>Like Count : {detail.like_count}</p>
                            <div className="summary">
                            <p className="summary_title">Summary</p>
                            <p className="summary_content">{detail.description_full}</p>
                        </div>
                    </div>
                    
                    </div>
                </div>
            )}
        </div>

        </div>
    );
}

export default Detail;
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie( {id, title, coverImg}) {

    return (
        <div className="movie" key={id}>
            <p><img src={coverImg} /></p> 
            <Link to = {`/movie/${id}`} className="link">{title}</Link>
                      
        </div>

    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
}


export default Movie;
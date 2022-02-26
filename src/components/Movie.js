import prop_types from "prop-types";
import {Link} from "react-router-dom";

function Movie({id,coverImg, title, summary, genres}){
    return (
        <div>
          <img src = {coverImg} alt={title}></img>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map( (g) => <li key={g}>{g}</li> )}
          </ul>
        </div>
    );
}

Movie.prop_types = {
    id:prop_types.number.isRequired,
    coverImg: prop_types.string.isRequired,
    title:  prop_types.string.isRequired,
    summary:    prop_types.string.isRequired,
    genres: prop_types.string.isRequired,
}

export default Movie;
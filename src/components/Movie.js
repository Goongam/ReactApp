import prop_types from "prop-types";
import {Link} from "react-router-dom";
import Style from "../css/Movie.module.css";


function Movie({id,coverImg, title, summary, genres}){
    return (
        <div className={Style.movie}>
          <img src = {coverImg} alt={title}></img>
          <h2 className={Style.movieTitle}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p className={Style.movieSummary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
          <ul>
            {genres?.map( (g) => <li key={g}>{g}</li> )}
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
import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }){
    return(
        <Link to={{
            pathname:`/movie/${id}`,
            state:{
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h3 className="movie_year">{year}</h3>
        <ul className="movie_genres">
            {genres.map((genre, index) => 
                <li key={index} className="genres_genre">{genre}</li>
            )}
            </ul>
        <p className="movie_summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    </Link>
    );
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
}
export default Movie;
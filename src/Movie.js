import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
// if the component doesn't have state
// you create component, Function component

function Movie({id, year, title, summary, poster, genres}){
    return (<div className = "movie">
        <img src = {poster} alt={title} title = {title}/>
        <div className = "movie__data">
            <h3 className = "movie__title">{title}</h3>
            <h5 className = "movie__year">{year}</h5>
            <ul className = "movie__genres">
                {genres.map((genre, index) =>  //fetched data, genre is Array Object
                    <li 
                        className = "genres__genre"
                        key = {index}
                    >{genre}
                    </li>
                )}
            </ul>
            <p className = "movie__summary">{summary.slice(0,100)}...</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,  //pk
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired, 
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;
/*  fetch data example
"status": "ok",
  "status_message": "Query was successful",
  "data": {
    "movie_count": 28615,
    "limit": 20,
    "page_number": 1,
    "movies": [
      {
        "id": 29168,
        "url": "https://yts.mx/movies/a-little-italian-vacation-2021",
        "imdb_code": "tt7177346",
        "title": "A Little Italian Vacation",
        "title_english": "A Little Italian Vacation",
        "title_long": "A Little Italian Vacation (2021)",
        "slug": "a-little-italian-vacation-2021",
        "year": 2021,
        "rating": 9.9,
        "runtime": 78,
        "genres": [
          "Comedy",
          "Romance"
        ],
        "summary": "In this outrageous comedy, a group of high school Seniors juggle between old loves and new flings on the shores of a beautiful Italian town.",
        "description_full": "In this outrageous comedy, a group of high school Seniors juggle between old loves and new flings on the shores of a beautiful Italian town.",
        "synopsis": "In this outrageous comedy, a group of high school Seniors juggle between old loves and new flings on the shores of a beautiful Italian town.",
        "yt_trailer_code": "",
        "language": "en",
        "mpa_rating": "",
        "background_image": "https://yts.mx/assets/images/movies/a_little_italian_vacation_2021/background.jpg",
        "background_image_original": "https://yts.mx/assets/images/movies/a_little_italian_vacation_2021/background.jpg",
        "small_cover_image": "https://yts.mx/assets/images/movies/a_little_italian_vacation_2021/small-cover.jpg",
        "medium_cover_image": "https://yts.mx/assets/images/movies/a_little_italian_vacation_2021/medium-cover.jpg",
        "large_cover_image": "https://yts.mx/assets/images/movies/a_little_italian_vacation_2021/large-cover.jpg",
        "state": "ok",
        "torrents": [
          {
            "url": "https://yts.mx/torrent/download/DC3025D0A354B875C0C9BB86590B8E5663871CE7",
            "hash": "DC3025D0A354B875C0C9BB86590B8E5663871CE7",
            "quality": "720p",
            "type": "web",
            "seeds": 0,
            "peers": 0,
            "size": "709.02 MB",
            "size_bytes": 743461356,
            "date_uploaded": "2021-03-21 01:53:53",
            "date_uploaded_unix": 1616288033
          },
          {
            "url": "https://yts.mx/torrent/download/79C49CEE5006AD3A039D548047103E137448805F",
            "hash": "79C49CEE5006AD3A039D548047103E137448805F",
            "quality": "1080p",
            "type": "web",
            "seeds": 0,
            "peers": 0,
            "size": "1.42 GB",
            "size_bytes": 1524713390,
            "date_uploaded": "2021-03-21 02:47:32",
            "date_uploaded_unix": 1616291252
          }
        ],
        "date_uploaded": "2021-03-21 01:53:53",
        "date_uploaded_unix": 1616288033
      }, */
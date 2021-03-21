import React from "react";
import "./App.css";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component{ 
  state = {
    isLoading : true,
    movies : []
  };
  getMovies = async () => { //await this func, and finished axios continue..
    const { data : 
              { data : 
                { movies }
              }
          } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies : movies, isLoading : false });
  }
  componentDidMount(){ // fetch data
    this.getMovies();
  }
  // react automatically execute render method
  render(){
    console.log("i am rendering");
    const {isLoading, movies} = this.state;
    return (
      <section className = "container">
        {isLoading 
            ? <div className = "loader">
                <span className = "loader__text">Loading...</span>
              </div>
            : (
              <div className = "movies">
               {movies.map(movie => // sending fetched data to Movie component
                (<Movie 
                    key = {movie.id}
                    id = {movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    summary = {movie.summary}
                    poster = {movie.medium_cover_image}
                    genres = {movie.genres}
                  />
                )
              )}
            </div>
            )}
    </section>
    );
  }
}

export default App;





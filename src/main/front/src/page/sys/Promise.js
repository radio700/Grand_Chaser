import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Movies({qwer,id,title, summary, img,genres}){
  return (
    <div>
      <Link to={`/movie/${id}`}><p>{title}</p></Link>
      {
        genres == null ? null : <p>genres : {genres}</p>
      }
      <img src={img} alt={title}/>
    </div>
  )
}


function Promise(){

  /*
  * use state and Effect
  */
  const [movies, setMovies] = useState([]);
  

  useEffect(() =>{
    fetch(url,{ method:"POST" })
    .then(response => response.json())
    .then(json => {
        setMovies(json.data.movies);
    })
  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */
  let url = "https://yts.mx/api/v2/list_movies.json";

  /*
  * HTML {javascript}
  */
  return(
    <div>
      {
        movies.map((movie) => (
          <Movies
            qwer = "tlqkf"
            id={movie.id}
            title={movie.title}
            summary = {movie.summary}
            img = {movie.large_cover_image}
            genres = {movie.genres}
          ></Movies>
        ))
      }
    </div>
  )
}

export default Promise;
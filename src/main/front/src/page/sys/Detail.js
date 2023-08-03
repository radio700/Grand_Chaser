import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail(){

  /*
  * use state and Effect
  */
  const [movie,setMovie] = useState([]);

  const {id} = useParams();//parent에서 받는 paramiter

  let url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;//달러 좌우' 지우기

  useEffect(() =>{
    fetch(url)
      .then(response => response.json())
      .then(json =>{
        console.log(json);
        setMovie(json.data.movie);
      })
  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */

  /*
  * HTML {javascript}
  */
  return(
  <div>
    <p>{id}</p>
    <p>{movie.title}</p>
  </div>
  )
}

export default Detail;
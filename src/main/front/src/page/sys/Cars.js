import { useState, useEffect } from "react";


function Cars(){

  /*
  * use state and Effect
  */

  const [Cars,setCars] = useState([]);

  let url = "http://localhost:8080/api/cars"

  useEffect(() =>{
  fetch(url)
      .then(response => response.json())
      .then(json =>{
          setCars(json);
          //console.log(json);
          //setMovies(json.data.movies);
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
        <table>
          <tbody>
            {
              Cars.map((car,id) => 
                <tr key={id}>
                  <td>{car.color}</td>
                  <td>{car.model}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
}

export default Cars;
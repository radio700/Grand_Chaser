import { useState, useEffect } from "react";
import { SERVER_URL } from "../../constants";

function Cars(){

  /*
  * use state and Effect
  */

  const [Cars,setCars] = useState([]);

  let url = `${SERVER_URL}api/cars`;

  useEffect(() =>{
  fetch(url)
      .then(response => response.json())
      .then(json =>{
          setCars(json);
          console.log(json);
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
          <thead>
            <tr>
              <td><p>e</p></td>
              <td><p>f</p></td>
            </tr>
          </thead>
          <tbody>
            {
              Cars.map((car,id) => 
                <tr key={id}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.color}</td>
                  <td>{car.year}</td>
                  <td>{car.price}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
}

export default Cars;
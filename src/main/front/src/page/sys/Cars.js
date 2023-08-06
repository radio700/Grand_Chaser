import { useState, useEffect } from "react";
import { SERVER_URL } from "../../constants";
import { DataGrid } from "@mui/x-data-grid";

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
          setCars(json._embedded.cars);
          console.log(json);
      })
      .catch((err) => console.error(err));
  },[])

  /*
  * User Function
  */
  const onDelClick = (url) => {
    if(window.confirm(` ${url} are you sure?`)){
      fetch(url, {method: "DELETE"})
      .then(response => fncallback())
      .catch((err) => console.error(err));
    }

  }

  const fncallback = () => {
    fetch(url)
      .then(response => response.json())
      .then(json => setCars(json._embedded.cars))
      .catch((err) => console.error(err));
      console.log("콜백됨");
  }

  const columns = [
    {field: 'brand', headerName: 'brand',  width: 200},
    {field: 'model', headerName: 'model',  width: 200},
    {field: 'color', headerName: 'color',  width: 200},
    {field: 'year', headerName: 'year',  width: 200},
    {field: 'price', headerName: 'price',  width: 200},
  ]

  /*
  * HTML {javascript}
  */
    return(
      <div style={{height:500, width:'100%'}}>
        <DataGrid
          rows={Cars}
          columns={columns}
          getRowId={row => row._links.self.href}
        >

        </DataGrid>
      </div>
      // <div>
      //   <table>
      //     <thead>
      //       <tr>
      //         <td><p>e</p></td>
      //         <td><p>f</p></td>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {
      //         Cars.map((car,id) => 
      //           <tr key={id}>
      //             <td>{car.brand}</td>
      //             <td>{car.model}</td>
      //             <td>{car.color}</td>
      //             <td>{car.year}</td>
      //             <td>{car.price}</td>
      //             <td>{car.id}</td>
      //             <button onClick={() => onDelClick(car.id)}>delete</button>
      //           </tr>
      //         )
      //       }
      //     </tbody>
      //   </table>
      // </div>
    )
}

export default Cars;
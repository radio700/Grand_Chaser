import { useState, useEffect } from "react";
import { SERVER_URL } from "../../constants";
import { DataGrid } from "@mui/x-data-grid";
import { Snackbar } from "@mui/material";

function Cars(){

  /*
  * use state and Effect
  */

  const [Cars,setCars] = useState([]);
  const [open,setOpen] = useState(false);

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
      setOpen(true);
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
    {
      field:"_links.self.href", headerName:"",
      renderCell: (row) => <button onClick={() => onDelClick(row.id)}>Delete</button>
    }
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

        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Car is Deleted"
        />

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
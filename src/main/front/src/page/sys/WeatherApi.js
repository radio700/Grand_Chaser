import { useState, useEffect } from "react";


function Weather(){

  /*
  * use state and Effect
  */

  const [temp,setTemp] = useState("");
  const [desc,setDesc] = useState("");
  const [isReady,setReady] = useState("");

  let url = "https://api.openweathermap.org/data/2.5/weather?appid=dc112664b734973e12fe221508a38ebe&units=metric&q=Korea"

  useEffect(() =>{
    fetch(url)
      .then(response => response.json())
      .then(json =>{
      console.log(json);
      setTemp(json.main.temp);
      setDesc(json.weather[0].description);
      setReady(true);
    })
      .catch((err) => console.error(err))
  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */
  

  /*
  * HTML {javascript}
  */
  if(isReady){
    return(
      <div>
        <h1>Weather</h1>
        <h3>{temp}</h3>
        <p>{desc}</p>
      </div>
    )
  } else {
    return <div>now Loading</div>
  }
}

export default Weather;
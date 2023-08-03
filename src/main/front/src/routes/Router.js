import {Routes, Route, BrowserRouter, Link} from "react-router-dom"
import { useEffect } from "react";
import Home from "../page/Home";
import Movie from "../page/sys/Movie";
import FormExample2 from "../page/sys/FormExample2";
import Array from "../page/sys/Array";
import Promise from "../page/sys/Promise";
import Detail from "../page/sys/Detail";
import Weather from "../page/sys/WeatherApi";
import Github from "../page/sys/Github";

function Router(){

    /*
    * use state and Effect
    */

    useEffect(() =>{
    
    },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

    /*
    * User Function
    */
    

    /*
    * HTML {javascript}
    */
    return(
      <div>
        <BrowserRouter>
          <nav style={{
            position:"relative",
            top:"0px",
            width:"100%",
            height:"30px",
            border:"1px solid"
          }}>
              <Link to="/">home | </Link>
              <Link to="/Movie">Movie |</Link>
              <Link to="/FormExample2">FormExample2 |</Link>
              <Link to="/Array">배열(Map) |</Link>
              <Link to="/Promise">Promise |</Link>
              <Link to="/Weather">Weather |</Link>
              <Link to="/Github">Github |</Link>
              
          </nav>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Movie" element={<Movie/>}></Route>
              <Route path="/FormExample2" element={<FormExample2/>}></Route>
              <Route path="/Array" element={<Array/>}></Route>
              <Route path="/Promise" element={<Promise/>}></Route>
              <Route path ="/movie/:id" element={<Detail/>} ></Route>
              <Route path="/Weather" element={<Weather/>}></Route>
              <Route path="/Github" element={<Github/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default Router;
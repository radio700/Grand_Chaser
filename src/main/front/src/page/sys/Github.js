import { useState, useEffect } from "react";
// import 'react-grid-layout/css/styles.css'
// import 'react-resizable/css/styles.css'

function Github(){

  /*
  * use state and Effect
  */

  const [keywords,setKeywords] = useState("");
  const [datas,setDatas] = useState("");
  const [loading,setLoading] = useState(false);

//  let url = "https://api.github.com/search/repositories?q=react"

  useEffect(() =>{

  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */ 
  
  const fnOnClick = () => {
      console.log(keywords);
      if(keywords === null || keywords === ""){
        alert("내용을 적어주세요");
        return;
      }
      let url = `https://api.github.com/search/repositories?q=${keywords}`

      fetch(url)
      .then(response => response.json())
      .then(json =>{
      console.log(json.items);
      setDatas(json.items)
      setLoading(true);
    })
  }

  /*
  * HTML {javascript}
  */

  if(loading){
    return(
      <div>
        <div>
          <label htmlFor="keyword">키워드</label>
          <input
            name="keyword"
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          ></input>
        </div><br/>
        <button text="검색" onClick={fnOnClick}>클릭</button><br/>
        <div>
          <table>
            <colgroup>
              <col width="100px"/>
              <col width="*"/>
              <col width="200px"/>
            </colgroup>

            
            <thead>
              <tr>
                <th>UUID</th>
                <th>TESTNO</th>
                <th>TASK</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test-1234-sddf-4321</td>
                <td>1</td>
                <td>할당 및 접속 테스트</td>
              </tr>
            </tbody>
            

          </table>
        </div>
  
        <div>
          <table>
            <tbody>
              {
                datas.map((data) => 
                  <tr>
                    <td>{data.name}</td>
                    <td>
                      <a href={data.html_url}>{data.html_url}</a>
                    </td>
                    <td>{data.length}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    ) 
  } else {
    return (
      <div>
        <label htmlFor="keyword">키워드</label>
        <input
        name="keyword"
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        ></input>
        <button text="검색" onClick={fnOnClick}>클릭</button><br/>
      </div>
    )
  }

  
}

export default Github;
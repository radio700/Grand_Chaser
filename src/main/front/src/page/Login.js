import { useEffect, useState } from "react";
import Button from "../components/Button";
import Bird from "../asset/Bird.jpg"
import Router from "../routes/Router";

function Login(props){

  /*
  * use state and Effect
  */
  const [Usrid,setUsrid] = useState("");
  const [UsrPw,setHours] = useState("");
  const [success,setSuccess] = useState(false);

  useEffect(() =>{
  
  },[])

  /*
  * User Function
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`id : ${Usrid} pw : ${UsrPw}`)
    if(Usrid === null || Usrid === "") {
      alert("id를 입력 해 주세요");
      return;
    }
    if(UsrPw === null || UsrPw === "") {
      alert("비밀번호를 입력 해 주세요");
      return;
    }

    if(Usrid === user.id && UsrPw === user.pw){
      setSuccess(true);
    }
    else{
      alert("유저가 존재하지 않거나 비밀번호가 틀렸어요");
      setSuccess(false);
    }
      
  }

    var user = {
      id : "1234",
      pw : "qwer"
    }

    // const imgurl = "/public/img/bird.jpg";

    /*
    * HTML {javascript}
    */
    return(

      <div>
        {success ? <Router/> : 
        <div style={{
        position:"relative",
        top:"560px",
        left:"20%"
        }}>
          <div>
            <img src={Bird} alt="bird" style={{width: "500px"}}/>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="Usrid">ID |</label>
                <input
                  value={Usrid || ""}
                  placeholder="Usrid"
                  id="Usrid"
                  type="text"
                  onChange={(e) => setUsrid(e.target.value)}
                  >
                  </input>
              </div>
              <div style={{position:"relative", top:"5px"}}>
                <label htmlFor="UsrPw">비밀번호 |</label>
                <input
                  placeholder="UsrPw"
                  type="text"
                  id="UsrPw"
                  value={UsrPw || ""}
                  onChange={(e) => setHours(e.currentTarget.value)}
                >
                </input>
              </div>
              <div style={{position:"relative", top:"10px"}}>
                <Button
                  type="submit"
                  text="제출"//파라미터 던진거 잘 볼 것
                >
                </Button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>

    )
}

export default Login;
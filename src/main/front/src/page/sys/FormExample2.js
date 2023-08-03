import { useState, useEffect } from "react";
import Button from "../../components/Button";


function FormExample2(){

  /*
  * use state and Effect
  */
  const [user,setUser] = useState({
    firstName : "",
    lastName : "",
    email : "",
  });

  useEffect(() =>{
  
  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`hello ${user.firstName} ${user.lastName}`)
  }

  const inputChange = (e) => {
    e.preventDefault();
    console.log(e);
    setUser({...user, [e.target.name]:e.target.value})
    //배열을 복사한거 ...user(상속)에
    //e.target.name -> input name="" 을 받는다
    //e.target.value -> 데이터
    //-> ["usrid"] : usrid
    
  }

  /*
  * HTML {javascript}
  */
  return(
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input
          value={user.firstName}
          placeholder="first name"
          type="text"
          name="firstName"
          onChange={inputChange}
        ></input><br/>
          
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={inputChange}
        ></input><br/>
          
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={inputChange}
        ></input><br/>

        <Button text="제출"></Button>
      </form>
    </div>
  )
}

export default FormExample2;
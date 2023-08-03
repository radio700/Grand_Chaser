import { useState, useEffect } from "react";


function Movie(){

  /*
  * use state and Effect
  */
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  useEffect(() =>{
  
  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */
  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

    console.log(value);
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤(this.super)
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };

  /*
  * HTML {javascript}
  */
  return(
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default Movie;
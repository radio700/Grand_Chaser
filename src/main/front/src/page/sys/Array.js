import { useEffect } from "react";


function User({user}){
  return (
    <div>
      <ul>
        <li key={user.id}>{user.username} ({user.email})</li>
      </ul>
    </div>
  )
}

function Array(){

  /*
  * use state and Effect
  */

  useEffect(() =>{
  
  },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

  /*
  * User Function
  */
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  /*
  * HTML {javascript}
  */
  return(
    <div>
      {users.map((user) => (
        <User user={user}></User>
      ))}
      {/* 윗 부분은 같은 맵에 return을 쓸 수 있다는 걸 보여준다 */}

      {/* 아래 ↓ 위 ↑ 주석 풀어서 한번 씩 해볼 것 */}

      {/* <ul>
        {
        users.map((users) =>
          <li key={users.id}>{users.username} ({users.email})</li>
        )}
      </ul> */}
      
    </div>
  )
}

export default Array;
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") return;

    setToDo("");
    setToDos(currentArray => [toDo,...currentArray]);
  }
  const deleteTodo = (index) => {
    console.log(index);
    setToDos( currentArray => currentArray.filter(  //인덱스가 같지않다면 반환(=같다면 반환x => 삭제함)
      (toDo, toDoindex ) => toDoindex != index    //(toDo배열의 각요소, 각요소의 인덱스)
    ) );
  }

  //console.log(toDos);
  return (
    <div>
      <h1>My to Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Wirte your to do..."></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) =>  //각 li에 유일한 key를 가지고 있어야함(에러발생방지)
            <li key={index}> 
              {item} 
              <button onClick={() => deleteTodo(index)}>delete</button>
            </li> //() => deleteTodo(index) 사용이유: 함수가 컴파일직후 바로 실행되지않게 하기 위해
          )}      
      </ul>
      
    </div>
  );
}

export default App;

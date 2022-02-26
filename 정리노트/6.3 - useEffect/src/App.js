import { useState, useEffect } from "react"; //useEffect import

function App() {

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev +1 );
// useEffect(배열내 값들이 변화할때 실행됨, [배열])
  useEffect(() => //첫호출때만 호출
    console.log("call once"), []); 
  useEffect(() => // keyword가 변경될때 호출
    console.log("call input keyword",keyword), [keyword]);
  useEffect(() => //counter가 변경될때 호출
    console.log("call click button"), [counter]);

  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here"></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}> Click me </button>
    </div>
  );
}

export default App;

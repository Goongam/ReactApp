import { useState, useEffect } from "react"; //useEffect import

function Hello(){
  useEffect( () =>{
    console.log("created"); //처음실행됨
    //return 된 함수는 해당 컴포넌트가 파괴될때 실행됨
    return () => {console.log("destroyed");};
  } ,[]);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

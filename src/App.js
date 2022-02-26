import {
  BrowserRouter as Router,
  Route,  //6버젼 바뀐내용
  Routes, //Switch 대신 사용,
        //<Route><Home/></Routes> -> <Route element={<Home/>}> 사용
} from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail"
function App() {
  return <Router>
    <Routes>
     {/* path="경로/:변수명"  넘겨줄 변수, 실제값은 Movie.js의 Link에서 넘겨줌
      받을땐 Detail의 useParams으로 받음*/}
      <Route path="/movie/:id" element={<Detail />}> 
      </Route>

      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}> 
      </Route>

    </Routes>
  </Router>  
}

export default App;

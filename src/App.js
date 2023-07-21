import './App.css';
import Labs from './labs';
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import {Link} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      {/* <Link to="hello">Hello World</Link> | <Link to="labs">Labs</Link> | <Link to="tuiter">Tuiter</Link> */}
      <div className="container">
        <Routes>
            <Route path="/"         element={<Navigate to="/labs"/>}/>
            <Route path="/labs/*"   element={<Labs/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

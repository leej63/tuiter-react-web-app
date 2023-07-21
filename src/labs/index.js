import Assignment3 from "./a3";
import {Routes, Route, Navigate} from "react-router";
import {Link} from "react-router-dom";
import Nav from "../nav";

function Labs() {
   return(
      <div>
         {/* <Link to="/labs/a3">A3</Link> | <Link to="/hello">Hello</Link> | <Link to="/tuiter">Tuiter</Link> */}
         <Nav/>
         <Routes>
            <Route path="/" element={<Navigate to="a3"/>}/>
            <Route path="a3" element={<Assignment3/>}/>
         </Routes>
      </div>
   );
}
export default Labs;
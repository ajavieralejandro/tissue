import {
  HashRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


//Pages
import HomePage from "./Pages/HomePage";
import ScenePage from "./Pages/ScenePage";

const App = () =>{
  return(
     <BrowserRouter>
      <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route path="/virtual_gallery" element={<ScenePage />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App;


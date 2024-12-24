import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Welcome from './Components/Welcome';
import Repo from './Components/Repo';



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path = '/' element = {<Welcome/>}></Route>
    <Route path = '/Repo' element = {<Repo/>}></Route>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;

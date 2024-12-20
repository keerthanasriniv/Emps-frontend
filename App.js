import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import Listing from './Listing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Listing/>}></Route>
      <Route path='/add' element={<AddEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
      
  
    </div>
  );
}

export default App;

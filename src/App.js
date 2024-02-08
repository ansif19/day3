import logo from './logo.svg';
import './App.css';
import Viewdata from './components/Viewdata';
import Appbar from './components/Appbar';
import { Route, Router, Routes } from 'react-router-dom';
import AddData from './components/AddData';


function App() {
  return (
    <div className="App">
     {/* <Viewdata/> */}
   <Appbar/>
   <Routes>
    <Route path="/"element={<Viewdata/>}/>
    <Route path="/add"element={<AddData/>}/>
   </Routes>
    </div>
  );
}

export default App;

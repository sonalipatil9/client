
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position ="top-center"/>

<Routes>
  <Route path="/" element = {<Home/>}/>

  <Route path='/AddContact' element = {<AddEdit/>}/>
  <Route path='/update/:id' element = {<AddEdit/>}/>
  <Route path='/view/:id' element = {<View/>}/>
  
  
</Routes>    
  


      
    </div>
    </BrowserRouter>
  );
}

export default App;

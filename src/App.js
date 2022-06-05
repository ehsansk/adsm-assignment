import './App.css';
import {BrowserRouter as Router,HashRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Form from './components/Form';
import GreetingEditable from './components/GreetingEditable';
import ZoomImage from './components/ZoomImage';

function App() {
 
  return (
    <div className='App'>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/greeting' element={<GreetingEditable />} />
        <Route path='/zooming' element={<ZoomImage />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;

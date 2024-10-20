import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/page';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './pages/signup/signup';
import Login from './pages/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Homepage/>}/>
          <Route path="/signup" element={ <SignUp/>}/>
          <Route path="/login" element={ <Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

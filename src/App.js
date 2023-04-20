import './App.css';
import Singup from './components/Singup';
import Login from './components/Login'
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/singup' element={<Singup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Navigate to='/singup' />} />
      </Routes>
    </div>
  );
}

export default App;

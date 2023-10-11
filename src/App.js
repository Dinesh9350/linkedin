import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;

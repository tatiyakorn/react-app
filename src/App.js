import './App.css';
import Login from './Login';
import{ Routes , Route} from 'react-router-dom'
import Main from './Main';
import Credit from './Credit';

function App() {
  return (
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='login'element={<Login/>}/>
      <Route path='main'element={<Main/>}/>
      <Route path='credit'element={<Credit/>}/>
   
    </Routes>
    
  );
}

export default App;

import Menu from './pages/main';
import { Route,Routes } from 'react-router';
function App() {
  return (
     <Routes> 
        <Route path='/' element={<Menu />} />
      </Routes>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/LoginForm';
import Products from './pages/Products';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

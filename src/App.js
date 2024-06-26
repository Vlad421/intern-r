import { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/LoginForm';
import Products from './pages/Products';



function App() {
	
	const isAuthenticated = useContext(Auth);
	
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginForm />} />
			  {isAuthenticated?<Route path='/products' element={<Products />} />:<Route path='/' element={<LoginForm />} />}
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

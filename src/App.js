import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/LoginForm';
import Products from './pages/Products';



export const Auth = createContext();

function App() {
	
	
  const [isAuthenticated,setAuthenticated] = useState(false);
	
	
  return (
    <BrowserRouter>
	 <Auth.Provider value={ {isAuthenticated,setAuthenticated }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginForm />} />
		  <Route path='/products' element={<Products/>} />
        </Routes>
      </div>
	  </Auth.Provider>
    </BrowserRouter>
	
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Header from './header/Header';

function App() {
    return (
        <>
           
                <Router>
                        <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/about"} element={<About />} />
                        <Route path={"/product"} element={<Product/>}/>
                    </Routes>
                </Router>
            
        </>
    );
}

export default App;
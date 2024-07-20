
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import './index.css';
import { Search } from '../src/features/search/search';
import Title from './components/Title/Title';
import Nav from '../src/components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import { Provider } from 'react-redux';
{/* import Albums from '../src/pages/Albums/Albums'; */}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Title />
          <Search />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/albums" element={<Albums />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
)

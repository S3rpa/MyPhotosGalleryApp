import { Search } from '../src/features/search/search';
import Nav from '../src/components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
{/* import Albums from '../src/pages/Albums/Albums'; */}

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/albums" element={<Albums />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

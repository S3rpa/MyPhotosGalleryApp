import Nav from '../src/components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
{/* import Albums from '../src/pages/Albums/Albums'; */}
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/albums" element={<Albums />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

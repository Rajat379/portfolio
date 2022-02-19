import './App.css';
import {Navbar} from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './Home/Home';

function App() {
  return (
    <Router>
    <Navbar />

    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    </Router>
  );
}

export default App;

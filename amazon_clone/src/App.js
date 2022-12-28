import './App.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import SearchIcon from '@mui/icons-material/Search';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

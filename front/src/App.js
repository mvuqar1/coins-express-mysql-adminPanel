
import './App.css';
import HomePage from './pages/HomePage/Home';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ListOfCoins from './pages/ListOfCoins/ListOfCoins';
import CoinDetail from './pages/CoinDetail/CoinDetail';
import SearchPage from './pages/SearchPage.jsx/SearchPage';
import Admin from './pages/Admin/Admin';
import AdminList from './pages/AdminList/AdminList';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/categories/:id' element={<ListOfCoins/>} />
          <Route path='/categories/:id/:coinId' element={<CoinDetail />} />
          <Route path='/all/:title' element={<SearchPage />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/list' element={<AdminList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

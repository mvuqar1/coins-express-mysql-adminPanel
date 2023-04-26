
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
import AdminEditCoin from './pages/AdminEditCoin/AdminEditCoin';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/categories/:id' element={<ListOfCoins/>} />
          <Route path='/categories/:id/:coinId' element={<CoinDetail />} />
          <Route path='/search/:title' element={<SearchPage />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/list' element={<AdminList />} />
          <Route path='/admin/list/edit/:id' element={<AdminEditCoin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

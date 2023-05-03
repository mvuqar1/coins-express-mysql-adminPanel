
import './App.css';
import HomePage from './pages/HomePage/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListOfCoins from './pages/ListOfCoins/ListOfCoins';
import CoinDetail from './pages/CoinDetail/CoinDetail';
import SearchPage from './pages/SearchPage.jsx/SearchPage';
import Admin from './pages/Admin/Admin/Admin';
import AdminList from './pages/Admin/AdminList/AdminList';
import AdminEditCoin from './pages/Admin/AdminEditCoin/AdminEditCoin';
import AdminAddCoin from './pages/Admin/AdminAddCoin/AdminAddCoin';
// import {RequireAuth} from "./Hoc/RequireAuth"
import { AuthProvider } from './Hoc/AuthProvider';

function App() {
  return (
    <div className='app'>
      <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/categories/:id' element={<ListOfCoins/>} />
          <Route path='/products/:coinId' element={<CoinDetail />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/admin'  element={<Admin />} />
          <Route path='/admin/list' element={
            // <RequireAuth>
              <AdminList />
            // </RequireAuth>
          } />
          <Route path='/admin/list/edit/:id' element={<AdminEditCoin />} />
          <Route path='/admin/add' element={<AdminAddCoin />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

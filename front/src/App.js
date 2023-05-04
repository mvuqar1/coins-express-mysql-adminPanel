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
import UserContextProvider from './Context/userContext';
import AdminRoute from './admin/AdminRoute/AdminRoute';

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/categories/:id' element={<ListOfCoins/>} />
          <Route path='/products/:coinId' element={<CoinDetail />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/admin' element={<UserContextProvider><Admin/></UserContextProvider>} />
          <Route path='/admin/*' element={<UserContextProvider><AdminRoute/></UserContextProvider>} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;

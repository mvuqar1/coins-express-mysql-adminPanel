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
import Admin from './admin/AdminLogin/AdminLogin';
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



// import './App.css';
// import HomePage from './pages/HomePage/Home';
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";
// import ListOfCoins from './pages/ListOfCoins/ListOfCoins';
// import CoinDetail from './pages/CoinDetail/CoinDetail';
// import SearchPage from './pages/SearchPage.jsx/SearchPage';
// import Admin from './admin/AdminLogin/AdminLogin';
// import UserContextProvider from './Context/userContext';
// import AdminRoute from './admin/AdminRoute/AdminRoute';



// const router=createBrowserRouter([
//   {exact: true, path:'/' ,element:<HomePage/>},
//   {path:'/categories/:id' ,element:<ListOfCoins/>},
//   {path:'/products/:coinId' ,element:<CoinDetail/>},
//   {path:'/search' ,element:<SearchPage/>},
//   {path:'/admin' ,element:<UserContextProvider><Admin/></UserContextProvider>},
//   {path:'/admin/*' ,element:<UserContextProvider><AdminRoute/></UserContextProvider>},
// ])

// function App() {
//   return (
//     <div className='app'>
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

// export default App;

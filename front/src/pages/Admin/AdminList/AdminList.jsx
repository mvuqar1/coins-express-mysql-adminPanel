import React, { useEffect, useState } from 'react'
import Search from '../../../Components/Search/Search'
import { getAllCoins } from '../../../API/Api'
import AdminListCoins from '../AdminListCoins/AdminListCoins'
import AdminAddCoin from '../../../Components/AdminAddCoinButton/AdminAddCoinButton'
import { useLocation, useNavigate } from 'react-router-dom'

export default function AdminList() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAuthenticated = location.state?.isAuthenticated;
  const state = location.state; // получаем объект состояния из свойства state
  const url = state?.url; 

 
  console.log(url)

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log(url)
    // if (!isAuthenticated ||url==="admin") {
    //   navigate('/admin');
    // }
    getAllCoins().then((data) => {
      setCoins(data);
    });
  }, [isAuthenticated, navigate, url]);

  return (
    <>
      <h1>Admin panel</h1>
      <Search />
      <AdminListCoins coins={coins}/>
      <AdminAddCoin/>
    </>
  );
}

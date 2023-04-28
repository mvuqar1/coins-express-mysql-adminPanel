import React, { useEffect, useState } from 'react'
import Search from '../../../Components/Search/Search'
import { getAllCoins } from '../../../API/Api'
import AdminListCoins from '../AdminListCoins/AdminListCoins'
import AdminAddCoin from '../../../Components/AdminAddCoinButton/AdminAddCoinButton'
import { useLocation, useNavigate } from 'react-router-dom'

export default function AdminList() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAuthenticated = location.state?.isAuthenticated;        //1
  const isAuthenticated2 = location.state?.isAuthenticated2;

 

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // console.log(url)
    if (!isAuthenticated && !isAuthenticated2 ) {
      navigate('/admin');
    }
    getAllCoins().then((data) => {
      setCoins(data);
    });
  }, [isAuthenticated, isAuthenticated2, navigate]);

  return (
    <>
      <h1>Admin panel</h1>
      <Search />
      <AdminListCoins coins={coins}/>
      <AdminAddCoin/>
    </>
  );
}

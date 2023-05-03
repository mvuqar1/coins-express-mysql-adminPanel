import React, { useEffect, useState } from 'react'
import Search from '../../../Components/Search/Search'
import { getAllCoins } from '../../../API/Api'
import AdminListCoins from '../AdminListCoins/AdminListCoins'
import AdminAddCoin from '../../../Components/AdminAddCoinButton/AdminAddCoinButton'
import { useNavigate } from 'react-router-dom'

export default function AdminList() {
  // const location = useLocation();
  const navigate = useNavigate();
  
  // const isAuthenticated = location?.state;        //1
  // const isAuthenticated2 = location.state?.isAuthenticated2;
  // console.log(isAuthenticated)

 

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // if (!isAuthenticated && !isAuthenticated2 ) {
    //   navigate('/admin');
    // }
    getAllCoins().then((data) => {
      setCoins(data);
    });
  }, []);

  return (
    <>
      <h1>Admin panel</h1>
      <Search state={true} />
      <AdminListCoins coins={coins}/>
      <AdminAddCoin/>
    </>
  );
}

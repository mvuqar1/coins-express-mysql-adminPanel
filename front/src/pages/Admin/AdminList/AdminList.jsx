import React, { useEffect, useState } from 'react'
import Search from '../../../Components/Search/Search'
import { getAllCoins } from '../../../API/Api'
import AdminListCoins from '../AdminListCoins/AdminListCoins'
import AdminAddCoin from '../../../Components/AdminAddCoinButton/AdminAddCoinButton'


export default function AdminList() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    getAllCoins().then(data => {
      setCoins(data)

    })
  },[])
  return (


    <>
      <h1>Admin panel</h1>
      <Search />
      <AdminListCoins coins={coins}/>
      <AdminAddCoin/>


    </>
  )
}

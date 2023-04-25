import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search'
import { getAllCoins } from '../../API/Api'
import AdminListCoins from '../AdminListCoins/AdminListCoins'


export default function AdminList() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    getAllCoins().then(data => {
      setCoins(data)

    })
  })
  return (


    <>
      <h1>Admin panel</h1>
      <Search />
      <AdminListCoins coins={coins}/>


    </>
  )
}

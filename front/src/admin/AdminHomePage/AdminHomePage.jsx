import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import { getAllCoins, getSearch } from '../../API/Api'
import AdminListCoins from '../AdminListCoins/AdminListCoins'
import AdminAddCoin from '../../Components/AdminAddCoinButton/AdminAddCoinButton'
import { Link, useSearchParams } from 'react-router-dom'

export default function AdminList() {
  const [coins, setCoins] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  const [submitPressed, setSubmitPressed] = useState(false)

  useEffect(() => {
    getAllCoins().then((data) => {
      setCoins(data);
    });
  }, [searchParams]);


  useEffect(() => {
    if (submitPressed) {
      getSearch("", searchParams.toString())
        .then(data => setCoins(data))
    }
    setSubmitPressed(false)

  },[submitPressed,searchParams])


  const submitForm = (values) => {
    setSubmitPressed(true)
    setSearchParams(values)
  }

  return (
    <>
      <h1>Admin panel</h1>
      <Link to={"/"}>Home Page</Link>
      <Search submitForm={(formValue) => submitForm(formValue)} />
      <AdminListCoins coins={coins} />
      <AdminAddCoin />
    </>
  );
}

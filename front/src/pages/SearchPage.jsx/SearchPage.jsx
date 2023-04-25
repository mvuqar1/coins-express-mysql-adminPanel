import React, { useEffect, useState } from 'react'
import { getSearch } from '../../API/Api'
import { Link, useParams } from 'react-router-dom'
import Search from '../../Components/Search'

export default function SearchPage() {
    const [serachList, setSerachList] = useState([])
    const params=useParams()


    useEffect(() => {
        getSearch(params.title).then(data => {
            console.log(data)
            setSerachList(data)
        })
    }, [params.title])
  return (
    <>
    <h1>Search Page</h1>
    <p className="to-home"> 
                <Link to={"/"}>Homepage</Link>— List of the coins
            </p>
    <Search/>
     <div className="list">
                {serachList.map(item => (
                            <div className="list-coins" >
                            <div>
                                <img className="list-image" src={item.image} alt="category pic" />
                            </div>
                            <div>
                            <p className="list-title">{item.title}</p>
                            <p className="list-short-desc">{item.short_desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

    </>
  )
}

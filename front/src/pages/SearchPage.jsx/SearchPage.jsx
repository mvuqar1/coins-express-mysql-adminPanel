import React, { useEffect, useState } from 'react'
import { getSearch } from '../../API/Api'
import { Link,  useLocation, useNavigate, useParams } from 'react-router-dom'
import Search from '../../Components/Search/Search'

export default function SearchPage() {
    const navigate=useNavigate()
    const lokation=useLocation()
    const fromAdmin=lokation.state
    const [serachList, setSerachList] = useState([])
    const params=useParams()


    useEffect(() => {
        if(!fromAdmin){
            navigate('/admin');
        }
        getSearch(params.title).then(data => {
            console.log(data)
            setSerachList(data)
        })
    }, [fromAdmin, navigate, params.title])
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
                     
                            <Link to={`/products/${item.id}`}><p className="list-title">{item.title}</p></Link>
                            <p className="list-short-desc">{item.short_desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

    </>
  )
}

import React, { useEffect, useState } from 'react'
import { getSearch } from '../../API/Api'
import { Link, useSearchParams } from 'react-router-dom'
import Search from '../../Components/Search/Search'

export default function SearchPage() {
    const [serachList, setSearchList] = useState([])
    //                                                                       ????????????????????????????
    // eslint-disable-next-line no-unused-vars                       
    const [urlSearch, setUrlSearch] = useSearchParams()

    useEffect(() => {
        getSearch("", urlSearch.toString())
            .then(data => setSearchList(data))
    }, [urlSearch])

    const submitForm=(value)=>{
        setUrlSearch(value)
    }
    return (
        <>
            <h1>Search Page</h1>
            <p className="to-home">
                <Link to={"/"}>Homepage</Link>— List of the coins
            </p>
            {/* <Search submitForm={(formValues)=>submitForm(formValues)} /> */}
            <Search submitForm={submitForm} />
            <div className="list">
                {serachList.length>0 && serachList.map(item => (
                    <div className="list-coins" key={item.id} >
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

import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Search.css"




export default function Search() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('')

    const submitFormHandler = (e) => {
        e.preventDefault()
        if(search!==""){
            navigate(`/search/${search}`)
        }   
    }

    const searchHandler = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    }

  return (
    <form onSubmit={submitFormHandler} className="form">
                <label>
                    <p>Input field</p>
                    <input className="category-input" name="search" value={search} onChange={searchHandler} />
                    <input className="search-btn" type="submit" value="Search" />
                </label>
            </form>
  )
}

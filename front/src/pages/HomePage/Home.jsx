import { useEffect, useState } from "react"
import { getCategories } from '../../API/Api'
import './Home.css';
import Search from "../../Components/Search/Search";

import CategoryPage from "../CategoryPage/CategoryPage";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        getCategories().then(data => {
            setCategories(data)
        })
    }, [])


    return (
        
        <div>
            <h1>Home Page</h1>
            <Link to={"/admin"}>Admin Panel</Link>

            <Search />

            <CategoryPage categories={categories} />

        </div>
    )
}

export default HomePage
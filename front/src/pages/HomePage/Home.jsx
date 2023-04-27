import { useEffect, useState } from "react"
import { getCategories } from '../../API/Api'
import './Home.css';
import Search from "../../Components/Search/Search";
import arrow from "./img/arrow.png"
import AdvancedPage from "../AdvancedPage/AdvancedPage";
import CategoryPage from "../CategoryPage/CategoryPage";

const HomePage = () => {
    const [categories, setCategories] = useState([])
    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        getCategories().then(data => {
            setCategories(data)
        })
    }, [])

    function handlerRotate() {
        setIsRotated(prevState => !prevState);
    }


    return (
        <div>
            <h1>Home Page</h1>

            <Search />

            <div className="advance" onClick={handlerRotate}>
                <span>Advanced filter</span>
                <img className={isRotated ? "rotate" : ""} src={arrow} alt="arrow" />
            </div>

            {!isRotated ?
                <CategoryPage categories={categories} />
                :
                <AdvancedPage />
            }
        </div>
    )
}

export default HomePage
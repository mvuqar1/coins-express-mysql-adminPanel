import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Search.css"
import AdvancedPage from './AdvancedPage//AdvancedPage';
import arrow from "./img/arrow.png"
import { useSearchParams } from 'react-router-dom';


export default function Search() {
    const [isRotated, setIsRotated] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    // const [formValues, setFormValues] = useState({
    //     search: searchParams.get("search"),
    //     country: searchParams.get("country"),
    //     metal: searchParams.get("metal"),
    //     quality: searchParams.get("quality"),
    //     fromPrice: searchParams.get("fromPrice"),
    //     toPrice: searchParams.get("toPrice"),
    //     fromYear: searchParams.get("fromYear"),
    //     toYear: searchParams.get("toYear")
    // })
    const [formValues, setFormValues] = useState(Object.fromEntries(searchParams.entries()))       //___???????


    const navigate = useNavigate();
    const location = useLocation()

    const [submitPressed, setSubmitPressed] = useState(false)


    function handlerRotate() {
        setIsRotated(prevState => !prevState);
    }

    const searchOnChangeHandler = (e) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submitFormHandler = (e) => {
        e.preventDefault()
        // const formData = new FormData(e.target);
        // const formDataToArray = [...formData.entries()]

        // const finalData = {}
        // formDataToArray.forEach(item => { // [ country: Canada ]
        //     if (item[1]) {
        //         finalData[item[0]] = item[1]
        //     }
        // })

        // setSearchParams(finalData)

        setSearchParams(formValues)

        setSubmitPressed(true)
    }

    useEffect(() => {
        if (submitPressed) {
            //go to SearchPage
            navigate('/search' + location.search);
            setSubmitPressed(false);
        }
    }, [submitPressed, location.search, navigate]);

    return (
        <form onChange={searchOnChangeHandler} onSubmit={submitFormHandler} className="form">
            <label>
                <p>Input field</p>
                <input className="category-input" name="search" value={formValues.search} onChange={searchOnChangeHandler} />
                <input className="search-btn" type="submit" value="Search" />
            </label>
            <div className="advance" onClick={handlerRotate}>
                <span>Advanced filter</span>
                <img className={isRotated ? "rotate" : ""} src={arrow} alt="arrow" />
            </div>
            {
                !isRotated
                    ? ""
                    : <AdvancedPage formValues={formValues} searchOnChangeHandler={searchOnChangeHandler} />
            }
        </form >
    )
}
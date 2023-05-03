import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Search.css"
import AdvancedPage from './AdvancedPage/AdvancedPage';
import arrow from "./img/arrow.png"
import { useSearchParams } from 'react-router-dom';


export default function Search({ state }) {
    const [isRotated, setIsRotated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const [submitPressed, setSubmitPressed] = useState(false)

    const [formValues, setFormValues] = useState({
        search: '',
        country: '',
        metal: '',
        quality: '',
        fromPrice: '',
        toPrice: '',
        fromYear: '',
        toYear: ''
    })


    useEffect(() => {
        if (submitPressed) {
            //go to SearchPage
            navigate('/search' + location.search);
            setSubmitPressed(false);
        }
    }, [submitPressed, location.search, navigate]);


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
        const formData = new FormData(e.target);
        const formDataToArray = [...formData.entries()]

        const finalData = {}
        formDataToArray.forEach(item => { // [ country: Canada ]
            if (item[1]) {
                finalData[item[0]] = item[1]
            }
        })
        // console.log(finalData)
        setSearchParams(finalData)
        setSubmitPressed(true)
    }


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

        // if (searchParams.toString().length) {
        //     navigate(`/search/${searchParams}`)
        // }
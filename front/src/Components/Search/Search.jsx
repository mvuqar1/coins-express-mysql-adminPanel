import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Search.css"
import AdvancedPage from './AdvancedPage/AdvancedPage';
import arrow from "./img/arrow.png"


export default function Search({ state }) {
    const navigate = useNavigate();

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
    const submitFormHandler = (e) => {
        e.preventDefault()
        if (formValues) {
            const filteredFormValues = Object.entries(formValues)
              .reduce((obj, [key, value]) => {
                obj[key] = value;                                                         //????????????????
                // console.log(obj)
                return obj;
              }, {});
            const queryParams = new URLSearchParams (filteredFormValues);                   //?????????????
            navigate(`/search/${queryParams.toString()}`, { state: true });
        }
    }

    const searchOnChangeHandler = (e) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const [isRotated, setIsRotated] = useState(false);
    function handlerRotate() {
        setIsRotated(prevState => !prevState);
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













// const [formValues, setFormValues] = useState({
//     search: '',
//     country: '',
//     metal: '',
//     quality: 'proof',
//     fromPrice: '',
//     toPrice: '',
//     fromYear: '',
//     toYear: ''
// })
// const submitFormHandler = (e) => {
//     e.preventDefault()
//     console.log("first")
//     // if (formValues.search !== "") {
//     //     navigate(`/search/${formValues.search}`, { state: true })
//     // }
//     if (formValues) {
//         const filteredFormValues = Object.entries(formValues)
//         //   .filter(([key, value]) => key !== "search")
//           .reduce((obj, [key, value]) => {
//             obj[key] = value;
//             // console.log(obj)
//             return obj;
//           }, {});
//         const queryParams = new URLSearchParams(filteredFormValues);
//         navigate(`/search/${formValues.search}?${queryParams.toString()}`, { state: true });
//     }
// }

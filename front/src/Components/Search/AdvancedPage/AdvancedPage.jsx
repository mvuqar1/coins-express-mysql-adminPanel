import React, { useEffect, useState } from 'react'
import "./AdvancedPage.css"
import { getOptions } from '../../../API/Api'

export default function AdvancedPage({ formValues, searchOnChangeHandler }) {
    const [filter, setFilter] = useState()

    useEffect(() => {
        getOptions().then(data => {
            setFilter(data)
            console.log(data)
        })

    }, [])


    return (
        <div className='advance-container'>
            <div className="left">
                <div className="advance-items">
                    <div className="advance-item">
                        <p className='.advance-p'>Issuing country</p>


                        <select className='advance-select' name='country' value={formValues.country} onChange={searchOnChangeHandler}>
                            <option value="">Select</option>
                            {filter && filter.countries.map(item => <option key={item} value={item}>{item}</option>)}
                        </select>

                    </div>
                    <div className="advance-item">
                        <p>Metal</p>
                        <select className='advance-select' name='metal' value={formValues.metal} onChange={searchOnChangeHandler}>
                            <option value="">Select</option>
                            {filter && filter.compositions.map(item => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="advance-item">
                        <p>Quality of the coin</p>
                        <select className='advance-select' name='quality' value={formValues.quality} onChange={searchOnChangeHandler}>
                            <option value="">Select</option>
                            {filter && filter.qualities.map(item => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>
                </div>

            </div>
            <div className="righ">
                <div className="advance-right-items">
                    <div className="advance-right-item">
                        <p className='advance-p'>Price</p>
                        <div className="from-to">
                            <span>from</span><input type="number" name='fromPrice' value={formValues.fromPrice} onChange={searchOnChangeHandler} />
                            <span>to</span><input type="number" name='toPrice' value={formValues.toPrice} onChange={searchOnChangeHandler} />
                        </div>
                    </div>
                    <div className="advance-right-item">
                        <p className='advance-p'>Year of issue</p>
                        <div className="from-to">
                            <span>from</span><input type="number" name='fromYear' value={formValues.fromYear} onChange={searchOnChangeHandler} />
                            <span>to</span><input type="number" name='toYear' value={formValues.toYear} onChange={searchOnChangeHandler} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

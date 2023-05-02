import React from 'react'
import "./AdvancedPage.css"

export default function AdvancedPage({formValues,searchOnChangeHandler}) {

    return (
        <div className='advance-container'>
            <div className="left">
                <div className="advance-items">
                    <div className="advance-item">
                        <p className='.advance-p'>Issuing country</p>
                        <select className='advance-select' name='country' value={formValues.country} onChange={searchOnChangeHandler}>
                            <option value="CANADA">Canada</option>
                            <option value="India">India</option>
                            <option value="Iran">Iran</option>
                            <option value="Yemen">Yemen</option>
                            <option value="China">China</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Iceland">Iceland</option>
                            <option value="British South Africa">British South Africa</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                        </select>
                    </div>
                    <div className="advance-item">
                        <p>Metal</p>
                        <select className='advance-select' name='metal' value={formValues.metal} onChange={searchOnChangeHandler}>
                            <option value="gold">Gold</option>
                            <option value="nickel">Nickel</option>
                            <option value="steel">Stell</option>
                            <option value="silver">Silver</option>
                        </select>
                    </div>
                    <div className="advance-item">
                        <p>Quality of the coin</p>
                        <select className='advance-select' name='quality' value={formValues.quality} onChange={searchOnChangeHandler}>
                            <option value="Proof">Proof</option>
                            <option value="BU">BU</option>
                            <option value="Proof2">Proof2</option>
                            <option value="Proof3">Proof3</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="righ">
                <div className="advance-right-items">
                    <div className="advance-right-item">
                        <p className='advance-p'>Price</p>
                        <div className="from-to">
                            <span>from</span><input type="number" name='fromPrice'  value={formValues.fromPrice} onChange={searchOnChangeHandler}/>
                            <span>to</span><input type="number"  name='toPrice' value={formValues.toPrice} onChange={searchOnChangeHandler}/>
                        </div>
                    </div>
                    <div className="advance-right-item">
                        <p className='advance-p'>Year of issue</p>
                        <div className="from-to">
                            <span>from</span><input type="number" name='fromYear' value={formValues.fromYear} onChange={searchOnChangeHandler}/>
                            <span>to</span><input type="number" name='toYear' value={formValues.toYear} onChange={searchOnChangeHandler} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

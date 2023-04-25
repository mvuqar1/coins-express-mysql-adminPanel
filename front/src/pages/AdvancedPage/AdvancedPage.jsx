import React from 'react'
import "./AdvancedPage.css"

export default function AdvancedPage() {
    return (
        <div className='advance-container'>
            <div className="left">
                <div className="advance-items">
                    <div className="advance-item">
                        <p className='.advance-p'>Issuing country</p>
                        <select className='advance-select'>
                            <option value="Canada">Canada</option>
                            <option value="India">India</option>
                            <option value="Iran">Iran</option>
                            <option value="Yemen">Yemen</option>
                            <option value="China">China</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Iceland">Iceland</option>
                        </select>
                    </div>
                    <div className="advance-item">
                        <p>Metal</p>
                        <select className='advance-select'>
                            <option value="gold">Gold</option>
                            <option value="nickel">Nickel</option>
                            <option value="steel">Stell</option>
                            <option value="silver">Silver</option>
                        </select>
                    </div>
                    <div className="advance-item">
                        <p>Quality of the coin</p>
                        <select className='advance-select'>
                            <option value="Proof">Proof</option>
                            <option value="Proof1">Proof1</option>
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
                            <span>from</span><input type="text" /><span>to</span><input type="text" />
                        </div>
                    </div>
                    <div className="advance-right-item">
                        <p className='advance-p'>Year of issue</p>
                        <div className="from-to">
                            <span>from</span><input type="text" /><span>to</span><input type="text" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

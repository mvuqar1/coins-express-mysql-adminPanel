import React from 'react'
import "./AdminAddCoinButton.css"
import { Link } from 'react-router-dom'

export default function AdminAddCoin() {
    return (
        <>
            <div className="add-coin-container">
                <Link to={"/admin/add"}>
                    <div className='add-round'>
                        <p>+</p>
                    </div>
                    <div className="add-link">
                        Add a new coin
                    </div>
                </Link>

            </div >
            <div className="add-coin-container">
                <Link to={"/admin/add2"}>
                    <div className='add-round'>
                        <p>+</p>
                    </div>
                    <div className="add-link">
                        Add UPLOAD
                    </div>
                </Link>

            </div >
        </>
    )
}

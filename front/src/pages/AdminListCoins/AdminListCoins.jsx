import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminListCoins.css"

export default function AdminListCoins(props) {
    const {coins}=props
  return (
    <>
    {coins.map(item => (

<div className="admin-list" key={item.id} >
  <div className="admin-list-left">
  <div>
    <img className="admin-list-image" src={item.image} alt="category pic" />
  </div>
  <div>
    {/* go to CoinDetail */}
    <Link to={`/categories/${item.category_id}/${item.id}`}>
      <p className="admin-list-title">{item.title}</p>
    </Link>

    <p className="admin-list-short-desc">{item.short_desc}</p>
  </div>
  </div>
  <div className='admin-list-right'>
    <button >Edit</button>
      <button>Delete</button>
  </div>
</div>

))
}
    </>
  )
}

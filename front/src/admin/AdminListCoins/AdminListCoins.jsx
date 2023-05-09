import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./AdminListCoins.css"
import { deleteCoin } from '../../API/Api'

export default function AdminListCoins(props) {



  const navigate=useNavigate()
  const { coins } = props
  const [deletedCoinId, setDeletedCoinId] = useState(null)


  const adminEditCoin=(item)=>{
    navigate(`/admin/list/edit/${item.id}`)
  }


  const adminDeleteCoin = (id) => {
    deleteCoin(id)
      .then(() => setDeletedCoinId(id))
  }
   
  return (
    <>
      {coins.map(item => {
        if (item.id === deletedCoinId) {
          // do not render the deleted coin
          return null
        }
        return (
          <div className="admin-list" key={item.id} >
            <div className="admin-list-left">
              <div>
                <img className="admin-list-image" src={item.image} alt="category pic" />
              </div>
              <div>
                
                {/* go to CoinDetail */}
                <Link to={`/products/${item.id}`}>
                  <p className="admin-list-title">{item.title}</p>
                </Link>

                <p className="admin-list-short-desc">{item.short_desc}</p>
              </div>
            </div>
            <div className='admin-list-right'>
              <button className='grey-button' onClick={()=>adminEditCoin(item)}>Edit</button>
              <button className='grey-button' onClick={() => adminDeleteCoin(item.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

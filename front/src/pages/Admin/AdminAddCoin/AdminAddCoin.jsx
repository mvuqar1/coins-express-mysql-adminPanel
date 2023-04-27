import React, { useState } from 'react'

import "./AdminAddCoin.css"
import { useNavigate } from 'react-router-dom';
import { postCoin } from '../../../API/Api';

export default function AdminAddCoin() {
  const navigate = useNavigate()
  const [coin, setCoin] = useState([{
    title: '',
    year: '',
    price: '',
    issuing_country: '',
    composition: '',
    short_desc: '',
    description: '',
    quality: '',
    weight: '',
    image: '',
    image2: '',
  }]);



  const cancelHandle = (e) => {
    e.preventDefault()
    navigate("/admin/list")
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCoin(coin => ([{
      ...coin[0],
      [name]: value
    }]));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (coin[0].title !== "") {
      console.log(coin[0])
      postCoin(coin[0])
      navigate("/admin/list")
    }


  };


  return (
    <div className='add-containet'>
      <h1>Admin Panel</h1>
      <div className="add-datails">
        {coin && coin.map((item, index) => (
          <form className='add-form' key={(index)} onSubmit={(e) => handleSubmit(e, item.id)} >

            <div className="add-details-left">
              <div className="add-detail">
                <label htmlFor="name">Coin name</label>
                <input name='title' value={item.title} type="text" onChange={(e) => handleInputChange(e)} />
              </div>

              {/* {} */}
              <div className="add-detail">
                <label htmlFor="name">Face value</label>
                <input name='face' type="text" />
              </div>
              <div className="add-detail">
                <label htmlFor="name">Year of issue</label>
                <input name='year' type="text" value={item.year} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail">
                <label htmlFor="name">Price</label>
                <input name='price' type="text" value={item.price} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail">
                <label htmlFor="name">Country</label>
                <input name='issuing_country' type="text" value={item.issuing_country} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail">
                <label htmlFor="name">Metal</label>
                <input name='composition' type="text" value={item.composition} onChange={(e) => handleInputChange(e)} />
              </div>
            </div>
            <div className="add-details-center">
              <div className="add-detail-large">
                <label htmlFor="name">Short description</label>
                <input name='short_desc' type="text" value={item.short_desc} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail-large">
                <label htmlFor="name">Long description</label>
                <input name='description' type="text" value={item.description} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail">
                <label htmlFor="name">Quality of the coin</label>
                <input name='quality' type="text" value={item.quality} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail">
                <label htmlFor="name">Weight</label>
                <input name='weight' type="text" value={item.weight} onChange={(e) => handleInputChange(e)} />
              </div>
            </div>
            <div className="add-details-right">
              <div>
                <div className="add-detail">
                  <label htmlFor="name">Link to obverse image</label>
                  <input name='image' type="text" value={item.image} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="add-detail">
                  <label htmlFor="name">Link to reverse image</label>
                  <input name='image2' type="text" value={item.image2} onChange={(e) => handleInputChange(e)} />
                </div>
              </div>
              <div className='add-btn-container'>
                <button className='blue-button'>Save</button>
                <button onClick={cancelHandle} className='grey-button'>Cancel</button>
              </div>

            </div>
          </form>
        ))}
      </div>


    </div>
  )
}

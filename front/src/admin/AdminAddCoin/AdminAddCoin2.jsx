/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import "./AdminAddCoin.css"
import { useNavigate } from 'react-router-dom';
import { getCategories, postCoin } from '../../API/Api';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase/firebase';

export default function AdminAddCoin() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("")
  const [coin, setCoin] = useState([{
    title: '',
    category_id: '',
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


  useEffect(()=>{
    getCategories().then((data) => {
      setCategory(data);
    })
  },[])

  const cancelHandle = (e) => {
    e.preventDefault()
    navigate(-1);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCoin(coin => ([{
      ...coin[0],
      [name]: value,
    }]));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (coin[0].title !== "") {
      postCoin(coin[0])
      navigate('/admin/list');
    }
  };

  const handleUploadImage = (e, imageType) => {
    const all=e.target
    const originFileObj=all.files[0]
 

    const { name, lastModified, type } = originFileObj;
    console.log(originFileObj)
    const nameArr = name.split('.')
    const finalReferenceName = nameArr[0] + lastModified + '.' + nameArr[1]
    const storageRef = ref(storage, finalReferenceName);

    uploadBytes(storageRef, originFileObj).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {
        console.log(url)


        if (imageType === 'front') {
          setCoin(coin => ([{
            ...coin[0],
            image: url
          }]))
        } else {
          setCoin(coin => ([{
            ...coin[0],
            image2: url
          }]))
        }
      })
    })
  }


  return (
    <div className='add-containet'>
      <h1>Admin Panel</h1>
      <div className="add-datails">
        {coin && coin.map((item, index) => (
          <form className='add-form' key={(index)} onSubmit={(e) => handleSubmit(e, item.id)} >

            <div className="add-details-left">
              <div className="add-detail">
                <label htmlFor="name">Coin name</label>
                <input name='title'  type="text" value={item.title} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail">
                <label htmlFor="name">Category id</label>
                <select name='category_id' type="text" value={item.category_id} onChange={(e) => handleInputChange(e)} >
                  <option value={""}>Select</option>
                  {category && category.map((item)=>(
                    <option value={item.id} key={item.name}>{item.name}</option>
                  ))}
              </select>
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
                <textarea name='short_desc' type="text" value={item.short_desc} onChange={(e) => handleInputChange(e)} />
              </div>
              <div className="add-detail-large">
                <label htmlFor="name">Long description</label>
                <textarea name='description' type="text" value={item.description} onChange={(e) => handleInputChange(e)} />
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
                  <input name='image' type="file"  onChange={(e) => handleUploadImage(e, 'front')} />
                </div>
                {coin[0].image ? (
                  <img
                    src={coin[0].image}
                    alt="Монета"
                    style={{
                      width: '30%',
                    }}
                  />
                ) : (
                  <div>Изображение отсутствует</div>
                )}

                <div className="add-detail">
                  <label htmlFor="name">Link to reverse image</label>
                  <input name='image2' type="file"  onChange={(e) => handleUploadImage(e, 'reverse')} />
                </div>
                  {coin[0].image2 ? (
                  <img
                    src={coin[0].image2}
                    alt="Монета"
                    style={{
                      width: '30%',
                    }}
                  />
                ) : (
                  <div>Изображение отсутствует</div>
                )}
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

import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom"
import "./AdminEditCoin.css"
import { getCoin, putCoin } from '../../../API/Api'
import { useNavigate } from 'react-router-dom';

export default function AdminEditCoin() {
    const navigate = useNavigate()
    const [coin, setCoin] = useState("")
    const location = useLocation();
    const fromAdmin = location.state?.isAuthenticated;

    const param = useParams()

    useEffect(() => {
        if (!fromAdmin) {
            navigate('/admin');
        }
        getCoin(param.id).then((data) => {
            setCoin(data);
        });
    }, [param.id, setCoin, fromAdmin, navigate]);

    const cancelHandle = (e) => {
        e.preventDefault()
        navigate('/admin/list', { state: { isAuthenticated: true } });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCoin(coin => ([{
            ...coin[0],
            [name]: value
        }]));
    };
    const handleSubmit = (e, id) => {
        e.preventDefault()
        const object = coin[0]

        putCoin(id, object)
        navigate('/admin/list', { state: { isAuthenticated: true } });

    };


    return (
        <div className='edit-containet'>
            <h1>Admin Panel</h1>
            <div className="edit-datails">
                {coin && coin.map((item) => (

                    <form className='edit-form' key={(item.id)} onSubmit={(e) => handleSubmit(e, item.id)} >

                        <div className="edit-details-left">
                            <div className="edit-detail">
                                <label htmlFor="name">Coin name</label>
                                <input name='title' value={item.title} type="text" onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail">
                                <label htmlFor="name">Category id</label>
                                <input name='category_id' type="text" value={item.category_id} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail">
                                <label htmlFor="name">Year of issue</label>
                                <input name='year' type="text" value={item.year} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail">
                                <label htmlFor="name">Price</label>
                                <input name='price' type="text" value={item.price} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail">
                                <label htmlFor="name">Country</label>
                                <input name='issuing_country' type="text" value={item.issuing_country} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail">
                                <label htmlFor="name">Metal</label>
                                <input name='composition' type="text" value={item.composition} onChange={(e) => handleInputChange(e)} />
                            </div>
                        </div>
                        <div className="edit-details-center">
                            <div className="edit-detail-large">
                                <label htmlFor="name">Short description</label>
                                <textarea name='short_desc' type="text" value={item.short_desc} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail-large">
                                <label htmlFor="name">Long description</label>
                                <textarea name='description' type="text" value={item.description} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail">
                                <label htmlFor="name">Quality of the coin</label>
                                <input name='quality' type="text" value={item.quality} onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="edit-detail">
                                <label htmlFor="name">Weight</label>
                                <input name='weight' type="text" value={item.weight} onChange={(e) => handleInputChange(e)} />
                            </div>
                        </div>
                        <div className="edit-details-right">
                            <div>
                                <div className="edit-detail">
                                    <label htmlFor="name">Link to obverse image</label>
                                    <input name='image' type="text" value={item.image} onChange={(e) => handleInputChange(e)} />
                                </div>
                                <div className="edit-detail">
                                    <label htmlFor="name">Link to reverse image</label>
                                    <input name='image2' type="text" value={item.image2} onChange={(e) => handleInputChange(e)} />
                                </div>
                            </div>
                            <div className='edit-btn-container'>
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







    // ({
    //     title: '',
    //     face: '',
    //     year: '',
    //     price: '',
    //     issuing_country: '',
    //     composition: '',
    //     short_desc: '',
    //     description: '',
    //     quality: '',
    //     weight: '',
    //     image: '',
    //     image2: '',
    //   });
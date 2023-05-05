import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom'
import { getDetail } from '../../API/Api'
import "./CoinDetail.css"

export default function CoinDetail() {
  const [product, setProduct] = useState({})
  const { id, coinId } = useParams()
  const location = useLocation();
  const fromAdmin = location.state?.url;
  const navigate = useNavigate()


  useEffect(() => {
    getDetail(id, coinId).then(data => {
      setProduct(data)
      console.log(data)
    })

  }, [id, coinId, fromAdmin,])


  return (
    <div className="detail-list">
      <div className="detail-coins" key={product.coin?.id}>
        <div className='detail-image-container'>
          <img className="detail-image" src={product.coin?.image} alt="category pic" />
          <img className="detail-image" src={product.coin?.image2} alt="category pic" />
        </div>
        <div className='detail-containet-details'>
          <div className="container-otstup">
            <div>
              <p className="detail-title">{product.coin?.title}</p>
              <p className="detail-short-desc">{product.coin?.short_desc}</p>

              {product.text_text?.map((item) => (
                <p className="detail-short-desc" key={item.id}>{item.context}</p>
              ))}

            </div>
            <div>
              <table className='table-detail'>
                <tbody>
                  <tr>
                    <td>Issuing Country</td>
                    <td>{product.coin?.issuing_country}</td>
                  </tr>
                  <tr>
                    <td>Composition</td>
                    <td>{product.coin?.composition}</td>
                  </tr>
                  <tr>
                    <td>Quality</td>
                    <td>{product.coin?.quality}</td>
                  </tr>
                  <tr>
                    <td>Denomination</td>
                    <td>{product.coin?.denomination}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{product.coin?.year}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{product.coin?.weight} g</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{product.coin?.price} $</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="back-to-container">
              <Link className="back-to" onClick={() => navigate(-1)}>Back to the list</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { getDetail } from '../../API/Api'
import "./CoinDetail.css"

export default function CoinDetail() {
  const [products, setProducts] = useState([])
  const { id, coinId } = useParams()


  useEffect(() => {
    getDetail(id, coinId).then(data => {
      setProducts(data)
    })
  }, [id, coinId])

  // const location = useLocation();
  // // console.log(location)
  // const url = location.state?.url || '';

  // const [searchParams] = useSearchParams();
  // const url = searchParams.get('url');

  const [searchParams] = useSearchParams();
const url = searchParams.get('url');
  console.log(url)
  


  return (
    <div className="detail-list">

      {products.map(item => (
        <div className="detail-coins" key={item.id}>
          <div className='detail-image-container'>
            <img className="detail-image" src={item.image} alt="category pic" />
            <img className="detail-image" src={item.image2} alt="category pic" />
          </div>
          <div className='detail-containet-details'>
            <div className="container-otstup">
              <div><p className="detail-title">{item.title}</p>
                <p className="detail-short-desc">{item.short_desc}</p>
                <p className="detail-short-desc">{item.description}</p></div>
              <div><table className='table-detail'>
                <tr>
                  <td>Issuing Country</td>
                  <td>{item.issuing_country}</td>
                </tr>
                <tr>
                  <td>Composition</td>
                  <td>{item.composition}</td>
                </tr>
                <tr>
                  <td>Quality</td>
                  <td>{item.quality}</td>
                </tr>
                <tr>
                  <td>Denomination</td>
                  <td>{item.denomination}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{item.year}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{item.weight} g</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{item.price} $</td>
                </tr>
              </table></div>
              <div className="back-to-container">
              <Link className='back-to' to={url === "admin" ? `/admin/list` : `/categories/${item.category_id}`}>Back to the list
              </Link>

  
                </div>
            </div>
          </div>
        </div>))
      }

    </div>
  )
}


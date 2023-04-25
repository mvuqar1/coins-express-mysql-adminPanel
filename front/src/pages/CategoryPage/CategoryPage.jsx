import React from 'react'
import { Link } from 'react-router-dom'
import "./CategoryPage.css"

export default function CategoryPage(props) {
    const {categories}=props
  return (
    <>
                <div className="categories">
                {categories.map(item => (
                    //go to ListOfCoins
                    <Link to={`categories/${item.id}`} key={item.id}>     
                        <div className="category" >
                            <p className="category-name">{item.name}</p>
                            <div>
                                <img className="category-image" src={item.image} alt="category pic" />
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div>
    </>
  )
}

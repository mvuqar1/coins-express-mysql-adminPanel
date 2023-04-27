import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCoins } from '../../API/Api'
import "./ListOfCoins.css"
import Search from "../../Components/Search/Search"


const ListOfCoins = () => {

    const params = useParams()
    const { id } = params;
    const [coins, setCoins] = useState([])

    useEffect(() => {
        getCoins(id).then(data => {
            setCoins(data)
        })
    }, [id])
    return (
        <div>
            <h1>List Of Coins</h1>

            <p className="to-home"> 
                <Link to={"/"}>Homepage</Link>— List of the coins
            </p>

            <Search/>


            <div className="list">
                {coins.map(item => (
                    //go to CoinDetail     gategory/id/:coinId
                        <Link to={`/products/${item.id}`} key={item.id}>
                            <div className="list-coins" >
                            <div>
                                <img className="list-image" src={item.image} alt="category pic" />
                            </div>
                            <div>
                            <p className="list-title">{item.title}</p>
                            <p className="list-short-desc">{item.short_desc}</p>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ListOfCoins
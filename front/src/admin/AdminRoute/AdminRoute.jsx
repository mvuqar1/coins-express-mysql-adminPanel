import { useContext} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from "../../Context/userContext"
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import AdminEditCoin from "../AdminEditCoin/AdminEditCoin";
import AdminAddCoin from "../AdminAddCoin/AdminAddCoin";
import AdminAddCoin2 from "../AdminAddCoin/AdminAddCoin2";

const AdminRoute = () => {

    const { loggedIn } = useContext(UserContext);

    return loggedIn ? (
        <Routes>
          <Route path='/list' element={<AdminHomePage />} />             
          <Route path='/list/edit/:id' element={<AdminEditCoin />} />
          <Route path='/add' element={<AdminAddCoin />} />
          <Route path='/add2' element={<AdminAddCoin2 />} />
        </Routes>
    ) : <Navigate to="/admin" />
}
export default AdminRoute
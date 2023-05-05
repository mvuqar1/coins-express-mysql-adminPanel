import { useContext} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from "../../Context/userContext"
import AdminList from "../AdminList/AdminList";
import AdminEditCoin from "../AdminEditCoin/AdminEditCoin";
import AdminAddCoin from "../AdminAddCoin/AdminAddCoin";

const AdminRoute = () => {

    const { loggedIn } = useContext(UserContext);

    return loggedIn ? (                                       //admin/list________????????????????????
        <Routes>
          <Route path='/list' element={<AdminList />} />             
          <Route path='/list/edit/:id' element={<AdminEditCoin />} />
          <Route path='/add' element={<AdminAddCoin />} />
        </Routes>
    ) : <Navigate to="/admin" />
}
export default AdminRoute
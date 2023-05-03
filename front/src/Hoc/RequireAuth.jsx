import { Navigate, useLocation } from "react-router-dom";
import { UseAuth } from "./UseAuth";

const RequireAuth = (children) => {
    const location=useLocation()
    const {user}=UseAuth()

    if(!user){
        return <Navigate to="/admin" state={{from:location}}/>
    }
    return children
}
 
export {RequireAuth}
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/authentication/Login"
import { Signup } from "../components/authentication/Signup"
import { PrivateRoute } from "./PrivateRoute"
import { Dashboard } from "../pages/Dashboard"
import { Analytics } from "../pages/Analytics"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='/analytics' element={<Analytics/>}/>
        </Routes>
    )
}
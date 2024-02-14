import { Route, Routes } from "react-router-dom"
import { Login } from "../components/authentication/Login"
import { Register} from "../components/authentication/Register"
import { PrivateRoute } from "./PrivateRoute"
import { Dashboard } from "../pages/Dashboard"
import { Analytics } from "../pages/Analytics"
import { Home } from "../pages/Home"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='/analytics' element={<Analytics/>}/>
        </Routes>
    )
}
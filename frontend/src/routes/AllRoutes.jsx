import { Route, Routes } from "react-router-dom"
import { Login } from "../components/authentication/Login"
import { Register} from "../components/authentication/Register"
import { PrivateRoute } from "./PrivateRoute"
import { Dashboard } from "../pages/Dashboard"
import { Analytics } from "../pages/Analytics"
import { Home } from "../pages/Home"
import { useState } from "react"
import { EditProduct } from "../pages/EditProduct"
import { LogoutPage } from "../components/LogoutPage"
import { AddProduct } from "../components/AddProduct"
import { DetailsPage } from "../pages/DetailsPage"

export const AllRoutes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/details/:id" element={<DetailsPage/>}/>
            <Route
                path="/add-product"
                element={<AddProduct onClose={handleCloseModal} />}
            />
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/logout' element={<LogoutPage />}/>
        </Routes>
    )
}
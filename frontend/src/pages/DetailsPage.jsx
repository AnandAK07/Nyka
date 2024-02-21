import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DetailsPage = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();
    // console.log(id)

    const getData = async () => {
        let url = `${process.env.REACT_APP_API_URL}/api/products/${id}`;
        const token = localStorage.getItem('e-token')
        try {
            const { data } = await axios({
                method: "get",
                url: url,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(data);
            setSingleProduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('/dashboard')
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {/* <h1>DetailsPage</h1> */}
            {/* <img src={singleProduct.picture} alt="picture" /> */}


            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={singleProduct.picture} alt="ecommerce" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-5xl title-font font-medium mb-1">{singleProduct.name}</h1>
                            <div className="mt-6 items-center pb-5 border-gray-100">
                                <h2 className="text-xl text-gray-500 tracking-widest">Product Id: {singleProduct._id}</h2>
                                <h2 className="text-xl text-gray-500 tracking-widest mt-3">Gender : {singleProduct.gender}</h2>
                                <h2 className="text-xl text-gray-500 tracking-widest mt-3">Category : {singleProduct.category}</h2>
                                <h2 className="text-xl text-gray-500 tracking-widest mt-3">Created at : {singleProduct.created_at}</h2>
                                <h2 className="text-xl text-gray-500 tracking-widest mt-3">Updated at : {singleProduct.updated_at}</h2>
                                <p className="text-lg mt-3 border-4 rounded-lg p-5 mt-3">{singleProduct.description}</p>
                            </div>
                            <div className="flex mt-5">
                                <span className="title-font font-medium text-2xl text-gray-900">${singleProduct.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleReturn}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Dashboardimg from '../assets/Dashboardimg.png';
import Analyticsimg from '../assets/Analytics.png';
import settingimg from '../assets/setting-2.png'
import searchimg from '../assets/search-normal.png'
import notification from '../assets/notification-bing.png'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { getAllProducts } from '../redux/productReducer/action';
import { Link, useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 4;
    const [search, setSearch] = useState("");
    const [filtering, setFiltering] = useState("");
    const [sortingOrder, setSortingOrder] = useState("");
    const apiUrl = process.env.REACT_APP_API_URL;


    const { product, loading, success, error } = useSelector((store) => store.productReducer)
    const dispatch = useDispatch()


    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        return navigate('/login');
    };

    const handleAddProduct = () => {
        return navigate('/add-product');
    }


    const getUrl = (apiUrl, search, filtering, sortingOrder) => {
        if (search) {
            apiUrl = apiUrl + `?q=${search}`
        }
        if (filtering) {
            apiUrl = apiUrl + `?category=${filtering}`
        }
        if (sortingOrder) {
            apiUrl = apiUrl + `?_sort=price&_order=${sortingOrder}`
        }
        return apiUrl;
    }
    console.log(product, 'product')
    useEffect(() => {
        getAllProducts(dispatch)
    }, [])

    // useEffect(() => {
    //     getData(currentPage, search, filtering, sortingOrder);
    //     // getData(data,setData,loading,setLoading,error,setError);
    // }, [currentPage, search, filtering, sortingOrder]);


    return (
        <div style={{
            display: 'flex', background: '#F8F8F8'
        }}>
            <div style={{ background: '#FFFFFF', height: '1184px', width: '230px', border: '1px solid black' }}>
                <h1 className='poppins-medium ' style={{ color: '#013CC6', fontSize: '24px', lineHeight: '36px', width: '203px', height: '36px', marginLeft: '18px', marginTop: '63px' }}>Nyka Dashboard</h1>
                <div style={{ height: '993px', width: '131px', marginLeft: '41px', marginTop: '57px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'space-between', width: '131px', height: '154px' }}>
                        <Link to={'/dashboard'}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '131px', height: '24px' }}>
                                <img src={Dashboardimg} alt="" />
                                <p style={{ width: '92px', height: '24px' }}>Dashboard</p>
                            </div>
                        </Link>
                        <Link to={'/analytics'}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '116px', height: '24px' }}>
                                <img src={Analyticsimg} alt="" />
                                <p style={{ width: '76px', height: '24px' }}>Analytics</p>
                            </div>
                        </Link>

                        <div onClick={handleLogout} style={{ display: 'flex', justifyContent: 'space-between', width: '96px', height: '24px' }}>
                            <img src={settingimg} alt="" />
                            <p style={{ width: '56px', height: '24px' }}>Logout</p>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '1129px', height: '52px', border: '1px solid pink', marginTop: '56.1px', marginLeft: '41px' }}>
                    <div style={{ display: 'flex', background: '#FFFFFF', width: '655px', height: '52px', border: '1px solid green' }}>
                        <img src={searchimg} alt="" style={{ width: '24px', height: '24px', marginTop: '13.9px', marginLeft: '20px' }} />
                        <input style={{ width: '57px', height: '24px', marginTop: '13.9px', marginLeft: '16px', border: 'none' }} placeholder='Search' />
                    </div>

                    <div style={{ display: 'flex', gap: '20px', background: '#FFFFFF', width: '124px', height: '52px', border: '1px solid black' }}>
                        <div style={{ width: '52px', height: '52px' }}>
                            <img src={notification} alt="" style={{ width: '24px', height: '24px', marginTop: '14px', marginLeft: '14px' }} />

                        </div>
                        <div style={{ width: '52px', height: '52px' }}>
                            <img src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'} alt="" style={{ width: '24px', height: '24px', marginTop: '14px', marginLeft: '14px' }} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', marginTop: '57.9px' }}>
                    <div>
                        <select name="Filter By Gender" id="gender-filter" style={{ background: '#FFFFFF', border: '1px solid black', width: '229.2px', height: '51.8px', marginLeft: '61px' }}>
                            <option value="placeholder" style={{ display: "none" }}>Filter By Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <select name="Filter By Category" id="gender-filter" style={{ background: '#FFFFFF', border: '1px solid black', width: '229.2px', height: '43px', marginLeft: '60.8px' }}>
                            <option value="placeholder" style={{ display: "none" }}>Filter By Category</option>
                            <option value="makeup">Makeup</option>
                            <option value="skincare">Skincare</option>
                            <option value="haircare">Haircare</option>
                        </select>

                        <select name="Sort By Price" id="gender-filter" style={{ background: '#FFFFFF', border: '1px solid black', width: '229.2px', height: '56.4px', marginLeft: '60.8px' }}>
                            <option value="placeholder" style={{ display: "none" }}>Sort By Price</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                    <button onClick={handleAddProduct} style={{ width: '248px', height: '58px', marginLeft: '102.8px', marginTop: '141.9px', background: '#0E1866', color: '#FFFFFF' }}>
                        ADD PRODUCT
                    </button>
                </div>

                <div style={{ background: '#FFFFFF', width: '1216px', height: '830px', border: '1px solid blue', marginTop: '73.6px', marginLeft: '33px' }}>
                    <div style={{ width: '1152px', height: '64px', border: '1px solid green', marginTop: '94px', marginLeft: '32px' }}>

                    </div>
                    {product?.map((item, index) => {
                        return <div style={{ display: 'flex', width: '1152px', height: '64px', border: '1px solid green', marginLeft: '32px' }}>
                            <img src={item.picture} alt="" style={{ width: '44px', height: '44px', marginTop: '10px', marginLeft: '32px' }} />
                            <p style={{ width: '63px', height: '22px', marginTop: '21px', marginLeft: '16px' }}>{`Product ${index + 1}`}</p>
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                            <p>{item.gender}</p>
                            <p>{item.description}</p>
                            <div style={{ border: '1px solid black', }}></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

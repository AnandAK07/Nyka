


import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Dashboardimg from '../assets/Dashboardimg.png';
import Analyticsimg from '../assets/Analytics.png';
import settingimg from '../assets/setting-2.png'
import searchimg from '../assets/search-normal.png'
import notification from '../assets/notification-bing.png'
import editImg from '../assets/edit-3.png'
import moreImg from '../assets/more-horizontal.png'
import trashImg from '../assets/trash-2.png'
import sortImg from '../assets/Sort.png'
import arrowImg from '../assets/arrow-right.png'
import greaterthen from '../assets/greaterthen.png'
import lessthen from '../assets/lessthen.png'
import active from '../assets/Active.png'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { getAllProducts } from '../redux/productReducer/action';
import { Link, useNavigate } from 'react-router-dom';

// const getUrl = (modifiedUrl, search, filtering, sortingOrder) => {
//     if (search) {
//         modifiedUrl += `?q=${search}`;
//     }
//     if (filtering) {
//         modifiedUrl += `?category=${filtering}`; // Use '&' to add additional query parameters
//     }
//     if (sortingOrder) {
//         modifiedUrl += `&_sort=price&_order=${sortingOrder}`;
//     }
//     return modifiedUrl;
// };

export const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterGender, setFilterGender] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);


    const navigate = useNavigate();
    const { token, isAuth, error, success } = useSelector((store) => store.authReducer)

    const handleLogout = () => {
        localStorage.removeItem('e-token');
        // localStorage.clear('e-token');
        return navigate('/login')
    };

    const handleAddProduct = () => {
        return navigate('/add-product');
    }

    const getData = async () => {
        try {
            let url = `${process.env.REACT_APP_API_URL}/api/products`;
            const token = localStorage.getItem('e-token')
            const data = await axios({
                method: 'get',
                url: url,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setProducts(data.data)
        } catch (error) {
            console.log(error);
        }
    };


    const filteredProducts = products.filter(product => {
        const genderMatch = filterGender === '' || product.gender === filterGender;
        const categoryMatch = filterCategory === '' || product.category === filterCategory;
        const searchTermMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

        if (genderMatch === '' && categoryMatch === '') {
            return searchTermMatch;
        } else if (genderMatch === '') {
            return categoryMatch;
        }
        else if (categoryMatch === '') {
            return genderMatch;
        } else {
            return genderMatch && categoryMatch && searchTermMatch;
        }
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    const handleEdit = (id) => {
        return navigate(`/edit/${id}`)
    }

    const handleDelete = async (id) => {
        const token = localStorage.getItem('e-token')
        const res = await axios({
            method: 'delete',
            url: `${process.env.REACT_APP_API_URL}/api/products/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res);
        getData();
    }

    function truncateDescription(description, wordCount) {
        // Split the description into an array of words
        const words = description.split(' ');

        // Get the first `wordCount` words
        const truncatedWords = words.slice(0, wordCount);

        // Join the truncated words back into a string
        const truncatedDescription = truncatedWords.join(' ');

        // Add ellipsis (...) if the description is truncated
        if (words.length > wordCount) {
            return truncatedDescription + '...';
        }
        return truncatedDescription;
    }


    const handleDetails = (id) => {
        return navigate(`/details/${id}`)
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / 10);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setCurrentPage(1)
    }, [filterCategory, filterGender, searchTerm])

    if (!isAuth) {
        return navigate('/login');
    }
    return (
        <div style={{ background: '#f7f6f9' }}>
            <div style={{
                display: 'flex', background: '#F8F8F8'
            }}>


                <div style={{ background: '#FFFFFF', height: '1184px', width: '230px' }}>
                    <h1 className='poppins-medium ' style={{ color: '#013CC6', fontSize: '24px', lineHeight: '36px', width: '203px', height: '36px', marginLeft: '18px', marginTop: '63px' }}>Nyka Dashboard</h1>

                    <div style={{ height: '993px', width: '131px', marginLeft: '41px', marginTop: '57px' }}>

                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', alignContent: 'space-between', width: '131px', height: '154px' }}>
                            <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'black' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '131px', height: '24px' }}>
                                    <img src={Dashboardimg} alt="" />
                                    <p style={{ width: '92px', height: '24px' }}>Dashboard</p>
                                </div>
                            </Link>
                            <Link to={'/analytics'} style={{ textDecoration: 'none', color: 'black' }}>

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
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '1129px', marginTop: '56.1px', marginLeft: '41px' }}>
                        <div style={{ display: 'flex', background: '#FFFFFF', width: '655px', height: '52px', border: '1px solid #00000033' }}>
                            <img src={searchimg} alt="" style={{ width: '24px', height: '24px', marginTop: '13.9px', marginLeft: '20px' }} />
                            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '500px', height: '24px', marginTop: '13.9px', marginLeft: '16px', border: 'none' }} placeholder='Search' />
                        </div>

                        <div style={{ display: 'flex', gap: '20px', background: '#FFFFFF', width: '124px', height: '52px' }}>
                            <div style={{ width: '52px', height: '52px' }}>
                                <img src={notification} alt="" style={{ width: '24px', height: '24px', marginTop: '14px', marginLeft: '14px' }} />
                            </div>
                            <div style={{ width: '52px', height: '52px' }}>
                                <img src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'} alt="" style={{ width: '24px', height: '24px', marginTop: '14px', marginLeft: '14px' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', marginTop: '33.9px' }}>
                        <div>
                            <select value={filterGender} onChange={e => setFilterGender(e.target.value)} name="Filter By Gender" id="gender-filter" style={{ background: '#FFFFFF', border: '1px solid #7949FF', borderRadius: '8px', width: '229.2px', height: '51.8px', marginLeft: '61px' }}>
                                <option value="placeholder" style={{ display: "none" }}>Filter By Gender</option>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                            </select>
                            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} name="Filter By Category" id="gender-filter" style={{ background: '#FFFFFF', border: '1px solid #7949FF', borderRadius: '8px', width: '229.2px', height: '43px', marginLeft: '60.8px' }}>
                                <option value="placeholder" style={{ display: "none" }}>Filter By Category</option>
                                <option value="makeup">Makeup</option>
                                <option value="skincare">Skincare</option>
                                <option value="haircare">Haircare</option>
                            </select>

                            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} name="Sort By Price" id="gender-filter" style={{ background: '#FFFFFF', border: '1px solid black', border: '1px solid #7949FF', borderRadius: '8px', width: '229.2px', height: '56.4px', marginLeft: '60.8px' }}>
                                <option value="placeholder" style={{ display: "none", height: '52px' }}>Sort By Price</option>
                                <option value="asc" >Ascending</option>
                                <option value="desc" style={{ height: '52px' }}>Descending</option>
                            </select>
                        </div>
                    </div>
                    <button className='inter-800' onClick={handleAddProduct} style={{ width: '248px', height: '58px', marginLeft: '973px', marginTop: '51.6px', background: '#0E1866', color: '#FFFFFF', borderRadius: '4px' }}>
                        <p style={{ width: '247.75px', height: '25.52px', marginLeft: '0.25px' }}>
                            ADD PRODUCT
                        </p>
                    </button>

                    <div style={{ background: '#FFFFFF', width: '1216px', height: '830px', border: '1px solid #3326AE14', marginTop: '46px', marginLeft: '33px', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', marginTop: '32px', marginLeft: '32px' }}>
                            <p className='inter-500' style={{ width: '131px', height: '30px' }}>Latest Orders</p>
                            <div style={{ display: 'flex', marginLeft: '958px', marginTop: '4px' }}>
                                <p style={{ width: '35px', height: '22px' }}>More</p>
                                <img src={arrowImg} alt="" style={{ display: 'flex', alignItems: 'center', width: '16px', height: '16px', marginTop: '2px', marginLeft: '12px' }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', width: '1152px', height: '64px', marginTop: '32px', marginLeft: '32px', background: '#F8F8F8' }}>

                            <div style={{ width: '62px', height: "22px", marginTop: '21px', marginLeft: '40px' }}>
                                <p className='inter-600 ' style={{ width: '62px', height: "22px" }}>Products</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', width: "67px", height: '22px', marginTop: '21px', marginLeft: '238px' }}>
                                <p className='inter-600 ' style={{ width: '51px', height: '22px' }}>Gender </p>
                                <img src={sortImg} alt="" style={{ width: '8px', height: '10px' }} />
                            </div>
                            <div style={{
                                display: 'flex', alignItems: 'center', width: "67px", height: '22px', marginTop: '21px', marginLeft: '64px'
                            }}>
                                <p className='inter-600 ' style={{ width: '64px', height: '22px' }}>Category</p>
                                <img src={sortImg} alt="" style={{ width: '8px', height: '10px' }} />
                            </div>
                            <div style={{
                                display: 'flex', alignItems: 'center', width: "67px", height: '22px', marginTop: '21px', marginLeft: '83px'
                            }}>
                                <p className='inter-600 ' style={{ width: '35px', height: '22px' }}>Price</p>
                                <img src={sortImg} alt="" style={{ width: '8px', height: '10px' }} />
                            </div>
                            <div style={{
                                display: 'flex', alignItems: 'center', width: "67px", height: '22px', marginTop: '21px', marginLeft: '139px'
                            }}>
                                <p className='inter-600 ' style={{ width: '79px', height: '22px' }}>Description</p>
                                <img src={sortImg} alt="" style={{ width: '8px', height: '10px' }} />
                            </div>
                            <div style={{
                                width: "52px", height: '22px', marginTop: '21px', marginLeft: '141px'
                            }}>
                                <p className='inter-600 '>Actions</p>
                            </div>
                        </div>
                        {currentProducts?.map((item, index) => {
                            return <div key={index} style={{ display: 'flex', width: '1152px', height: '64px', marginLeft: '32px', borderTop: '1px solid #00000033' }}>
                                <img src={item.picture} alt="" style={{ width: '44px', height: '44px', marginTop: '10px', marginLeft: '32px' }} />
                                <p className='inter-400' style={{ color: '#555F7E', width: '65px', height: '22px', marginTop: '21px', marginLeft: '16px' }}>{`Product ${index + 1}`}</p>
                                {/* <p style={{ width: '63px', height: '22px', marginTop: '21px', marginLeft: '16px' }}>{item.name}</p> */}
                                <p style={{ color: '#555F7E', width: '48px', height: '22px', marginTop: '21px', marginLeft: '183px' }}>{item.gender}</p>
                                <p style={{ color: '#555F7E', width: '57px', height: '22px', marginTop: '21px', marginLeft: '85px' }}>{item.category}</p>
                                <p style={{ color: '#555F7E', width: '56px', height: '22px', marginTop: '21px', marginLeft: '106px' }}>${item.price}</p>
                                {/* <div style={{ display: 'flex', flexDirection: 'row', width: '366px' }}>
                            </div> */}
                                <div style={{ width: '366px', height: '61px', marginLeft: '77px', marginTop: '8px' }}>
                                    <p style={{ textAlign: 'justify', color: '#555F7E', width: '250px' }}>{`Name : ${item.name} ,` + `Description : ` + truncateDescription(item.description, 5)}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", width: '80px', height: '16px', marginLeft: '-96px', marginTop: '24px', gap: '16px' }}>
                                    <img src={editImg} alt="" style={{ width: '16px' }} onClick={() => handleEdit(item._id)} />
                                    <img src={trashImg} alt="" style={{ width: '16px' }} onClick={() => handleDelete(item._id)} />
                                    <img src={moreImg} alt="" style={{ width: '16px' }} onClick={() => handleDetails(item._id)} />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '14px', paddingBottom: '14px' }}>
                <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px', background: '#919EAB', borderRadius: '4px', marginLeft: '1318px', border: '1px solid #919EAB' }}>
                    <img src={lessthen} alt="" />
                </button>
                <button onClick={() => paginate(currentPage)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px', borderRadius: '4px', marginLeft: '6px', background: '#ffffff', border: '1px solid #4200FF' }}>
                    {currentPage}
                </button>
                <button disabled={totalPages === currentPage} onClick={() => paginate(currentPage + 1)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px', borderRadius: '4px', marginLeft: '6px', background: '#ffffff', border: '1px solid #DFE3E8' }}>
                    {currentPage + 1}
                </button>
                <button disabled={totalPages === currentPage} onClick={() => paginate(currentPage + 1)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px', borderRadius: '4px', marginLeft: '6px', background: '#ffffff', border: '1px solid #DFE3E8' }}>
                    <img src={greaterthen} alt="" />
                </button>
            </div>
        </div>

    )
}

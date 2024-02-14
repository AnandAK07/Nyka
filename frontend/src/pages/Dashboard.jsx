import React from 'react'
import './Dashboard.css'
import Dashboardimg from '../assets/Dashboardimg.png';
import Analyticsimg from '../assets/Analytics.png';
import settingimg from '../assets/setting-2.png'
import searchimg from '../assets/search-normal.png'
import notification from '../assets/notification-bing.png'



export const Dashboard = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ background: '#FFFFFF', height: '1184px', width: '230px', border: '1px solid black' }}>
                <h1 className='poppins-medium ' style={{ color: '#013CC6', fontSize: '24px', lineHeight: '36px', width: '203px', height: '36px', marginLeft: '18px', marginTop: '63px' }}>Nyka Dashboard</h1>
                <div style={{ height: '993px', width: '131px', marginLeft: '41px', marginTop: '57px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'space-between', width: '131px', height: '154px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '131px', height: '24px' }}>
                            <img src={Dashboardimg} alt="" />
                            <p style={{ width: '92px', height: '24px' }}>Dashboard</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '116px', height: '24px' }}>
                            <img src={Analyticsimg} alt="" />
                            <p style={{ width: '76px', height: '24px' }}>Analytics</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '96px', height: '24px' }}>
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
                            <img src={notification} alt="" style={{ width: '24px', height: '24px', marginTop: '14px', marginLeft: '14px' }} />
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
                    <button style={{ width: '248px', height: '58px', marginLeft: '102.8px', marginTop: '141.9px', background: '#0E1866', color: '#FFFFFF' }}>
                        ADD PRODUCT
                    </button>
                </div>

                <div style={{ background: '#FFFFFF', width: '1216px', height: '830px', border: '1px solid blue', marginTop: '73.6px', marginLeft: '33px' }}>
                    <div style={{ width: '1152px', height: '64px', border: '1px solid green', marginTop: '94px', marginLeft: '32px' }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

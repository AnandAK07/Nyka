import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { UserData } from '../pages/Data'


export const PieChart = ({ product, section, category }) => {
    const [userData, setUserData] = useState({
        labels: category,
        datasets: [{
            label: `${section} Overview Chart`,
            data: product.map((data) => data.category),
            backgroundColor: ['#50b432', '#ec571b', '#ddde01'],
            borderColor: "black",
            borderWidth: 2
        }]
    })


    const countData = (data) => {
        // Use map to extract gender information
        var Data;
        if (section == 'Category') {
            Data = data.map(item => item.category);
        } else {
            Data = data.map(item => item.gender);
        }

        // Initialize counters
        let maleCount = 0;
        let femaleCount = 0;
        let skincareCount = 0;
        let makeupCount = 0;
        let haircareCount = 0;

        // Iterate through genderData to count genders
        if (section == 'Category') {
            Data.forEach(category => {
                if (category === 'skincare') {
                    skincareCount++;
                } else if (category === 'makeup') {
                    makeupCount++;
                } else if (category === 'haircare') {
                    haircareCount++;
                }
            });
        } else {
            Data.forEach(gender => {
                if (gender === 'male') {
                    maleCount++;
                } else if (gender === 'female') {
                    femaleCount++;
                }
            });
        }

        // Return the counts
        if (section == 'Category') {
            return [skincareCount, makeupCount, haircareCount];
        } else {
            return [maleCount, femaleCount];
        }
    };

    useEffect(() => {
        if (product.length > 0) {
            const labels = category;
            const data = countData(product); // Assuming there's a field named 'quantity' representing data for the chart
            // const data=[4,3];
            setUserData({
                labels: labels,
                datasets: [{
                    ...userData.datasets[0],
                    data: data
                }]
            });
        }
    }, [product]);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '3rem 0' }}>
            <h2>{section + ` Overview Chart`}</h2>
            <div style={{ width: '800px', border: '5px solid black', margin: '1rem', padding: '1rem 5rem 1rem 5rem' }}>
                <Pie data={userData} />
            </div>
        </div>
    )
}

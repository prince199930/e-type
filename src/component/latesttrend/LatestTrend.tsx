import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../scss/LatestTrend.scss"
import { ProductType } from '../../types/Products'
import { TrendProps } from '../../types/TrendProps'


function LatestTrend({ productName, visible }:TrendProps) {
    const [trendData, setTrendData] = useState([])
    useEffect(() => {
        axios("https://fakestoreapi.com/products").then(res => setTrendData(res.data.slice(0, 5)))
    })

    return (
        <>
            <div className='trendContainer' style={{display:visible==false && productName.length<=0?"none":""}}>
                <h3>Latest Trends</h3>
                <div className='trendData'>

                    {trendData.map((item:ProductType) =>
                        <div className='detailContainer'>
                            <div className='about' >
                                <img className='image' src={item.image}  />
                                <p className='title' >{item.title}</p>
                            </div>
                        </div>)}

                </div>
                <h3>Popular suggestions</h3>
                {trendData.map((items:ProductType) => <p className='suggestConatiner'>{items.title}</p>)}
            </div>
        </>

    )
}

export default LatestTrend
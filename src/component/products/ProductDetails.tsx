import React, { useEffect, useState } from 'react'
import SearchBar from '../searchbar/SearchBar'
import { BiHeart } from "react-icons/bi";
import "../scss/ProductDetails.scss"
import StarRating from '../ratingComponent/StarRating';
import SearchResult from '../searchResult/SearchResult';
import { ProductProps } from '../../types/ProductProps';


function ProductDetails({ fetchData, productName, final }:ProductProps) {

    const [select, setSelect] = useState()
    const changeColor = (i:any) => {
        setSelect(i)
    }

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <>
            <SearchBar value={productName} onChange={(e) => fetchData(e.target.value)}/>
            <div style={{ backgroundColor: "#fff", display: "flex", justifyContent: "space-evenly" }}>
                <SearchResult />
                <div className='trendDetailContainer'>
                    {
                        final.map((item, id) => <div className='trendDesc'>
                            <div>
                                <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                                    className="imagetrend" src={item.image} />
                                {isHovering && <p className='hoverdesc'>View Product</p>}
                                <BiHeart onClick={() => changeColor(id)} style={{ height: "10px", width: "10px", color: select === id ? "red" : "", marginLeft: "110px" }}></BiHeart>
                            </div>
                            <div>
                                <div>
                                    <p className='title'>{item.title}</p>
                                    <p className='price'>Rs : {item.price}</p>
                                </div>
                                <div className='ratingDesc'>
                                    <StarRating
                                        name="rate1"
                                        starCount={5}
                                        value={item.rating.rate}
                                        editing={false}
                                        emptyStarColor="#ccc"
                                        starColor="#FECD70"
                                    />
                                    <p className='countDesc'>({item.rating.count})</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </>
    )
}

export default ProductDetails
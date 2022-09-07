import React from 'react'
import StarRating from '../ratingComponent/StarRating'

function SearchResult() {
  return (
    <div>
                    <div>
                        <p>Search Results</p>
                    </div>
                    <div>
                        <div>
                            <p>BRAND</p>
                        </div>
                        <div>
                            <div className='searchConatiner'>
                                <p className='desc'></p>
                                <p style={{ fontSize: "0.6rem", marginTop: "13px", marginLeft: '4px' }}>Mango</p>
                            </div>
                            <div className='searchConatiner' >
                                <p className='desc' ></p>
                                <p style={{ fontSize: "0.6rem", marginTop: "13px", marginLeft: '4px' }}>hM</p>
                            </div>
                        </div>
                        <div>
                            <p>PRICE RANGE</p>
                        </div>
                        <div>
                            <div className='searchConatiner' >
                                <p className='desc'  ></p>
                                <p style={{ fontSize: "0.6rem", marginTop: "13px", marginLeft: '4px' }}>Under 500</p>
                            </div>
                            <div className='searchConatiner' >
                                <p className='desc'> </p>
                                <p style={{ fontSize: "0.6rem", marginTop: "13px", marginLeft: '4px' }}>1000 To 3000</p>
                            </div>
                        </div>
                        <div>
                            <p>RATINGS</p>
                        </div>
                        <div>
                            <div className='searchConatiner' >
                                <p className='ratingdesc' ></p>
                                <StarRating
                                    name="rate1"
                                    starCount={5}
                                    value={5}
                                    editing={false}
                                    emptyStarColor="#ccc"
                                    starColor="#FECD70"
                                />
                            </div>
                            <div className='searchConatiner' >
                                <p className='ratingdesc'></p>
                                <StarRating
                                    name="rate1"
                                    starCount={5}
                                    value={4}
                                    editing={false}
                                    emptyStarColor="#ccc"
                                    starColor="#FECD70"
                                />
                            </div>
                            <div className='searchConatiner' >
                                <p className='ratingdesc'></p>
                                <StarRating
                                    name="rate1"
                                    starCount={5}
                                    value={3}
                                    editing={false}
                                    emptyStarColor="#ccc"
                                    starColor="#FECD70"
                                />
                            </div>
                            <div className='searchConatiner' >
                                <p className='ratingdesc'></p>
                                <StarRating
                                    name="rate1"
                                    starCount={5}
                                    value={2}
                                    editing={false}
                                    emptyStarColor="#ccc"
                                    starColor="#FECD70"
                                />
                            </div>
                            <div className='searchConatiner' >
                                <p className='ratingdesc'></p>
                                <StarRating
                                    name="rate1"
                                    starCount={5}
                                    value={1}
                                    editing={false}
                                    emptyStarColor="#ccc"
                                    starColor="#FECD70"
                                />
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default SearchResult
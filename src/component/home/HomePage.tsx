import LatestTrend from '../latesttrend/LatestTrend'
import SearchBar from '../searchbar/SearchBar'
import  HomeImage  from '../../assets/HomeImage.jpg'
import "../scss/HomePage.scss"
import { HomeProps } from '../../types/HomeProps'



function HomePage({ productName, fetchData, visible, setVisible }:HomeProps) {
    return (
        <div className='imageConatainer' style={{ backgroundImage: `linear-gradient(76deg, rgba(193, 195, 204, 0.83) 35%, rgba(193, 195, 204, 0.28) 65%), url(${HomeImage})`, paddingTop:'100px',    height: "120vh" }}>
            <SearchBar value={productName} onChange={(e) => fetchData(e.target.value)} onClick={()=>setVisible(true)} />
            <LatestTrend productName={productName} visible={visible} />
        </div>
    )
}

export default HomePage
import { Link } from "react-router-dom"
import "../scss/SearchBar.scss"
import { BiSearchAlt } from "react-icons/bi";
import { SearchProps } from "../../types/SearchProps";


function SearchBar({ value, onChange,onClick }:SearchProps) {

    return (
        <div className='searchContainer'>
            <div>
                <input
                    className='inputContainer'
                    value={value}
                    placeholder="Enter Product Detail"
                    onChange={onChange}
                    onClick={onClick}
                />
            </div>

            <div className='icon'>
                <Link to="/productDetails"><BiSearchAlt/></Link>
            </div>
        </div>
    )
}

export default SearchBar
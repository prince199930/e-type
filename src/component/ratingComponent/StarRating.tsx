import StarRatingComponent from 'react-star-rating-component';
import { StarProps } from '../../types/StarProps';

function StarRating({name, starCount, value, editing, emptyStarColor, starColor}:StarProps) {
    return (
        <StarRatingComponent
            name={name}
            starCount={starCount}
            value={value}
            editing={editing}
            emptyStarColor={emptyStarColor}
            starColor={starColor}
        />
    )
}

export default StarRating
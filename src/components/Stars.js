import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function Stars(props) {
    const { rating } = props;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} />);
  }

  const remainingStars = 5 - stars.length;

  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={fullStars + i + 1} />);
  }

  return <>{stars}</>;
}

export default Stars
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ average }) => {
  const [rating] = useState(average);

  const renderStars = () => {
    const stars = [];
    const maxRating = 10;
    const filledStars = Math.floor((rating / maxRating) * 5);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < filledStars ? "#ffc107" : "#e4e5e9"}
          size={24}
        />
      );
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;

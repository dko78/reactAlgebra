import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const StiriliziranaKartica = ({ item }) => {
  /*
  const [rating, setRating] = useState("5");
  const [text, setText] = useState("fgdgfdgdfg");

  const handleClick = () => {
    setRating(3);
  };
*/
  return (
    <div className="card">
      <div className="rating">{item.rating}</div>Kartica
      <div className="text-display">{item.text}</div>StiriliziranaKartica
      <button onClick={handleClick}>Klik</button>
      {/* raiting sa 5 na 10 */}
    </div>
  );
};

export default StiriliziranaKartica;

import { Link } from "react-router-dom";
import { useState } from "react";

const Colors = () => {
  const [colors, setColors] = useState([]);

  return (
    <>
      <h1>Welcome to the color factory!</h1>
      <Link to="/color/new">Add a color</Link>
      {colors.length > 0 && (
        <div>
          <h3>Please select a color:</h3>
          {colors.map((color) => (
            <Link to={`/color/${color}`}>{color}</Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Colors;

import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  const renderColors = colors.map((color) => (
    <li key={color.id}>
      <Link to={`/colors/${color.name}`} className="Colors-link">
        {color.name}
      </Link>
    </li>
  ));

  return (
    <div className="Colors">
      <h1>Welcome to the color factory!</h1>
      <Link to="/color/new">Add a color</Link>
      {colors.length > 0 && (
        <div className="Colors-items">
          <h3>Please select a color:</h3>
          <ul>{renderColors}</ul>
        </div>
      )}
    </div>
  );
};

export default Colors;

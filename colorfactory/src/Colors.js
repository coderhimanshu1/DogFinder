import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  const renderColors = () => {
    return (
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <Link to={`/color/${color.color}`} className="Colors-link">
              {color.color}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="Colors">
      <h1>Welcome to the color factory!</h1>
      <Link to="/color/new">Add a color</Link>
      {colors.length > 0 && (
        <div className="Colors-items">
          <h3>Please select a color:</h3>
          {renderColors()}
        </div>
      )}
    </div>
  );
};

export default Colors;

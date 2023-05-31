import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuid } from "uuid";

const NewColorform = ({ addColor }) => {
  const initialState = { name: "", hex: "#ffffff" };

  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name: formData.name, hex: formData.hex, id: uuid() });
    setFormData(initialState);
    history.push("/colors");
  };

  const { hex, name } = formData;

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
  );
};

export default NewColorform;

import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewColorform = ({ addColor }) => {
  const initialState = {
    color: "",
  };

  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData.color);
    setFormData(initialState);
    history.push("/colors");
  };

  return (
    <>
      <form className="NewColorform" onSubmit={handleSubmit}>
        <label htmlFor="color">Add new color</label>
        <input
          id="color"
          type="text"
          name="color"
          placeholder="enter color here"
          onChange={handleChange}
          className="NewColorform-input"
        />
        <button className="NewColorform-btn">Add Me!</button>
      </form>
    </>
  );
};

export default NewColorform;

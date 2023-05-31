import {
  Redirect,
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Color from "./Color";
import Colors from "./Colors";
import NewColorform from "./NewColorForm";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  const [colors, setColors] = useState(() => {
    // Get the colors from local storage when the component is mounted
    const savedColors = localStorage.getItem("colors");
    if (savedColors) {
      return JSON.parse(savedColors);
    } else {
      return [];
    }
  });

  useEffect(() => {
    // Save the colors to local storage whenever they change
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = (color) => {
    const newColor = { ...color, id: uuid() };
    setColors((prevColors) => [...prevColors, newColor]);
  };

  const renderCurrentColor = (props) => {
    const { color } = props.match.params;
    const colorObj = colors.find((c) => c.name === color);
    return colorObj ? (
      <Color {...props} hex={colorObj.hex} color={color} />
    ) : (
      <Redirect to="/colors" />
    );
  };

  return (
    <BrowserRouter>
      <Route exact path="/colors">
        <Colors colors={colors} />
      </Route>
      <Route path="/color/new">
        <NewColorform addColor={addColor} />
      </Route>
      <Route path="/colors/:color" render={renderCurrentColor} />
      <Redirect to="/colors" />
    </BrowserRouter>
  );
};

export default App;

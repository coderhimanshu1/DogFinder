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

  const addColor = (color) => {
    const newColor = { color, id: uuid() };
    setColors((prevColors) => [...prevColors, newColor]);
  };

  useEffect(() => {
    // Save the colors to local storage whenever they change
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        <Route path="/color/new">
          <NewColorform addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors"></Redirect>
      </BrowserRouter>
    </div>
  );
};

export default App;

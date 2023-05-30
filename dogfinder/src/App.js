import {
  BrowserRouter,
  Redirect,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./static/whiskey.jpg";
import duke from "./static/duke.jpg";
import perry from "./static/perry.jpg";
import tubby from "./static/tubby.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/dogs">
          <DogList dogs={App.defaultProps.dogs} />
        </Route>
        <Route path="/dogs/:name">
          <DogDetails dogs={App.defaultProps.dogs} />
        </Route>
        <Redirect to="/dogs"></Redirect>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;

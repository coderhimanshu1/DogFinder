import {
  Redirect,
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Color from "./Color";
import Colors from "./Colors";
import NewColorform from "./NewColorForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/colors">
          <Colors />
        </Route>
        <Route path="/color/new">
          <NewColorform />
        </Route>
        <Route path="/colors/:color">
          <Color />
        </Route>
        <Redirect to="/colors"></Redirect>
      </BrowserRouter>
    </div>
  );
}

export default App;

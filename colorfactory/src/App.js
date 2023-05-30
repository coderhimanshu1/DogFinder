import {
  Redirect,
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/colors">
          <Colors />
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

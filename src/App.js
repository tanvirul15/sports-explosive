import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import Navbar from "./components/Navbar/Navigation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/league/">
            <Header />
            <LeagueDetails />
          </Route>
          <Route exect path="/">
            <Header heading={true} />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

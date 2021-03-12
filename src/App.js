import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import Navbar from "./components/Navbar/Navigation";
import Contact from "./components/Contact";
import About from "./components/About";
import Navigation from "./components/Navbar/Navigation";
import LeagueItem from "./components/LeagueItem/LeagueItem";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/league/:leagueID'>
          <LeagueDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

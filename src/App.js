import { Route, Switch } from "react-router-dom";
import "./App.css";

//pages
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";

//Components
import MainNavigation from "./components/layout/MainNavigation";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/NewMeetup">
          <NewMeetup />
        </Route>
        <Route path="/Favourites">
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

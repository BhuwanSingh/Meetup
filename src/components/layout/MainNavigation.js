import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import Logo from './logo.png';


const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div><Link to="/"><img src={Logo} height="200px" alt="" /></Link></div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetups</Link>
          </li>
          <li>
            <Link to="/Favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/NewMeetup">NewMeetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

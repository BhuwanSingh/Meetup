import { useContext } from "react";

import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-contest";

import Logo from './logo.png';


const MainNavigation = () => {
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div><Link to="/"><img src={Logo} height="200px" alt="" /></Link></div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetups</Link>
          </li>
          <li>
            <Link to="/Favourites">Favourites
            <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
            </Link>
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

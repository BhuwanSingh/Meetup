import { useContext } from "react";

import classes from "./meetupitem.module.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-contest";

const MeetupItem = (props) => {
  const favouriteCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouriteCtx.ItemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={[classes.image]}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : " To Favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;

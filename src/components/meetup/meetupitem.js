import classes from "./meetupitem.module.css";
import Card from "../ui/Card";

const MeetupItem = (props) => {
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
          <button>To Favourites.</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;

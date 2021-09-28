import { useContext } from "react";
import FavouritesContext from "../store/favourites-contest";
import MeetupList from "../components/meetup/meetuplist";

const Favourites = () => {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You have no Favourites yet.</p>;
  } else {
    console.log(favouriteCtx.favourites)
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;

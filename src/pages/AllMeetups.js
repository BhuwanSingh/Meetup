import { useState } from "react";

import MeetupList from "../components/meetup/meetuplist";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups , setLoadedMeetups] = useState([]);

  fetch("https://practiceprj-one-default-rtdb.firebaseio.com/meetups")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <div>
      <h1> AllMeetups </h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;

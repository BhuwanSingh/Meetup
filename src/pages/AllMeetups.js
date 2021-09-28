import { useState, useEffect } from "react";

import MeetupList from "../components/meetup/meetuplist";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://practiceprj-one-default-rtdb.firebaseio.com/meetups.json")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          // console.log(meetup)
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1> AllMeetups </h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;

import { useHistory } from "react-router";

import NewMeetupForm from "../components/meetup/NewNeetupForm"

const NewMeetup = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch('https://practiceprj-one-default-rtdb.firebaseio.com/meetups.json' , {
      method : 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( () => {
      history.replace('/');
    });
  } 

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;

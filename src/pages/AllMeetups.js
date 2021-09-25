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
  const ind = DUMMY_DATA.map((meetup) => {
    return (
      <li key={meetup.id}>
        <div>{meetup.title}</div>
        {/* <div>
          <img src={meetup.image} alt="" />
        </div>
        <div>{meetup.address}</div>
        <div>{meetup.description}</div> */}
      </li>
    );
  });

  return (
    <div>
      AllMeetups
      <section>
        <ul>{ind}</ul>
      </section>
    </div>
  );
};

export default AllMeetups;

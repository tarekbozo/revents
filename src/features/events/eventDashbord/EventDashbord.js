import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "./../../../app/api/sampleData";

const EventDashbord = () => {
  const [events, setEvents] = useState(sampleData);

  // const handelCreateEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handelUpdateEvents = (updatedEvent) => {
  //   setEvents(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   );
  //   selectEvent(null);
  // };

  const handelDeleteEvent = (eventId) => {
    setEvents(events.filter((evt) => evt.id !== eventId));
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={handelDeleteEvent} />
        </Grid.Column>

        <Grid.Column width={6}>
          <h2>Event filters</h2>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EventDashbord;

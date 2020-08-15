import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "./../../../app/api/sampleData";

const EventDashbord = ({ formOpen, setFormOpen }) => {
  const [events, setEvents] = useState(sampleData);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>

        <Grid.Column width={6}>
          {formOpen && <EventForm setFormOpen={setFormOpen} />}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EventDashbord;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import cuid from "cuid";

const EventForm = ({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) => {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setvalues] = useState(initialValues);

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };

  const handelFormSubmit = () => {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "./assets/user.png",
        });
    setFormOpen(false);
  };
  return (
    <div>
      <Segment clearing>
        <Header
          content={selectedEvent ? "Edit the Event" : "Create new event"}
        />
        <Form onSubmit={handelFormSubmit}>
          <Form.Field>
            <input
              type="text"
              placeholder="Event title"
              name="title"
              value={values.title}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={values.category}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Venue"
              name="venue"
              value={values.venue}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={values.date}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            as={Link}
            to="/events"
            type="submit"
            floated="right"
            content="Cancel"
          />
        </Form>
      </Segment>
    </div>
  );
};

export default EventForm;

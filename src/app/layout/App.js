import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import HomePage from "./../../features/home/HomePage";
import EventDashbord from "./../../features/events/eventDashbord/EventDashbord";
import EventDetailedPage from "./../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "./../../features/events/eventForm/EventForm";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashbord} />
              <Route exact path="/events/:id" component={EventDetailedPage} />
              <Route
                exact
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;

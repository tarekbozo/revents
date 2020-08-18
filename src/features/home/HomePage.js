import React from "react";
import {
  Segment,
  Header,
  Container,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.svg"
            style={{ marginBootom: 12 }}
          />
          Re-Vents
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get Started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;

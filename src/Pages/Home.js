import React, { Component } from "react";
import CaroselBox from "../Component/CaroselBox";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <CaroselBox />

        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4">
            <Card bg="">
              <Card.Img
                variant="top"
                src="https://walrathrecruiting.com/wp-content/uploads/2020/11/teamwork-and-team-building.png"
              />
              <Card.Body>
                <Card.Title>DEVELOPMENT</Card.Title>
                <Card.Text>
                The latest standards are being implemented. The site will work as quickly and correctly as possible in all browsers
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card>
            
              <Card.Body>
                <Card.Title>TESTING</Card.Title>
                <Card.Text>
                Before launch, the site is thoroughly tested to identify and fix errors.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://storage.googleapis.com/media.helloumi.com/71027/channels/ZO0J60P98P5S22J4PL1Y8RCBGAGVAJ55.jpg"
              />
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://res.infoq.com/articles/who-is-on-the-team/en/headerimage/who-is-on-the-team-header-1612952290708.jpg"
              />
              <Card.Body>
                <Card.Title>DESIGN</Card.Title>
                <Card.Text>
                An individual design is developed in accordance with the subject of goods or services
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

          </CardDeck>
        </Container>
      </div>
    );
  }
}

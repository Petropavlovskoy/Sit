import React, { Component } from "react";
import { Container, Col, Row, Media, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://miro.medium.com/max/1540/0*6e2K0U6ZkN9Ju9iL.jpg"
              />
              <Media.Body>
                <h5>Компоненты</h5>
                <p>
                  Все в реакте это компонент и они обычно принимают форму
                  JavaScript классов. Вы создаете компонент, создавая дочерний
                  класс от React-Component класса.
                </p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://miro.medium.com/max/1540/0*6e2K0U6ZkN9Ju9iL.jpg"
              />
              <Media.Body>
                <h5> Обработка данных</h5>
                <p>
                  Есть два типа данных в React: props и state. Разница между
                  ними сначала немного коварна для понимания, так что не
                  беспокойтесь, если это вас собьет с толку, все станет гораздо
                  проще после того как вы начнете с ними работать. Ключевое
                  различие тут в том, что state приватен и может меняться из
                  самого компонента. Props внешние и не контролируются самим
                  компонентом. Он передается от компонентов выше по иерархии,
                  которые также контролируют данные. Компонент может менять своё
                  внутреннее состояние напрямую. Но он не может менять свои
                  props таким же образом.
                </p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://miro.medium.com/max/1540/0*6e2K0U6ZkN9Ju9iL.jpg"
              />
              <Media.Body>
                <h5>State</h5>
                <p>
                  Другой способ хранения данных в React это state компонента, то
                  есть его внутренне состояние. И в отличие от props — который
                  не может быть изменен напрямую компонентом — state это умеет.
                  Так что, если вы хотите изменить данные в вашем приложении —
                  для примера основываясь на взаимодействиях пользователя — то
                  это должно находиться в state компонента внутри приложения.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>REACT JS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3 bg-light">
              <Card.Body>
                <Card.Title> Side widget</Card.Title>
                <Card.Text>
                  Write to me everything that you would like to know, ask or do
                  not understand, and I will be happy to answer you as quickly
                  as possible!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

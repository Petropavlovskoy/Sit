import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import foto1 from "../assets/foto1.jpg";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Skills </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Languages </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="founth">Frameworks </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img width={300} height={400} src={foto1} />
                  <p>
                    {" "}
                    <h1> Sergey Liashenko</h1>
                  </p>
                  <p> Kharkov, Ukraine </p>
                  <p>Project: </p>

                  <a href="https://petropavlovskoy.github.io/demo-samurai/#/">
                    React JS course project.
                  </a>

                  <p>
                    <a href=" https://petropavlovskoy.github.io/Index.html">
                    Bootstrap 5 course project.
                    </a>
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img src="https://lh3.googleusercontent.com/proxy/5LBtE7KVg0ReeeUZQzm7qou_h0D2i3gbbSTS0_2wx_fv_8vVezIJmFAg5skV-Kc4O46hUkXMqAdzSV_ged5fEx23NG-BdwWSTEKUfP898EWVs8iVIYXKgXRRLZnzEVU" />
                  <h3>
                    JavaScript, TypeScript, React JS, CSS, HTML, GIT, Redux
                  </h3>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img src="https://www.englishdom.com/dynamicus/blog-post/000/001/608/1602835783_content_700x455.jpg?1602835784943" />
                  <h3>Russian(Native), English(Beginner/Elementary)</h3>
                </Tab.Pane>

                <Tab.Pane eventKey="founth">
                  <img src="https://lh4.googleusercontent.com/sBaxDLU9jP8BOaB8vNld8Yu_dv7V3HZGBNBHiguET93-VXWxm1tO3J6PtAWEg46cBAicYGZtZEMwRdYO3NYJUKBrEIT18-KvRUAMIHzQ_Q1sagcKZa3hyKVR4hJaf4VpTV3hoAoa" />
                  <p>
                    React — JavaScript-библиотека с открытым исходным кодом для
                    разработки пользовательских интерфейсов. React
                    разрабатывается и поддерживается Facebook, Instagram и
                    сообществом отдельных разработчиков и корпораций. React
                    может использоваться для разработки одностраничных и
                    мобильных приложений.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import web4 from '../assets/web3.jpg';
import web from '../assets/web.jpg';
import web1 from '../assets/web1.jpg';


export default class CaroselBox extends Component {
  render() {
    return (
      <Carousel>
          <Carousel.Item> 
              <img
              className="d-block w-100"
              src={web1}
              alt="Forest"
              />
              <Carousel.Caption className="text-dark">
                  <h3>CSS</h3>
                  <p>Сочетание яркого и стильного дизайна с функциональностью сделали сайт удобным и современным. </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> 
              <img
              className="d-block w-100"
              src={web4}
              alt="Forest"
              />
              <Carousel.Caption className="text-dark">
                  <h3 >Java Script</h3>
                  <p>Проектируем удобный интерфейс, создаем дизайн, внедряем креативные фичи, программируем, интегрируем, тестируем, запускаем, анализируем результат, вносим корректировки и получаем хороший работающий проект. </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> 
              <img
              className="d-block w-100"
              src={web}
              alt="Forest"
              />
              <Carousel.Caption className="text-dark">
                  <h3>HTML</h3>
                  <p> Cамый базовый строительный блок Веба </p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    );
  }
}

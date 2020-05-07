import React from 'react';
import {Label, Col, Row, FormText, Container} from 'reactstrap';
import SelectMeal from './SelectMeal';
import { v4 as uuidv4 } from 'uuid';

const FormSelectMeal = (props) => {
    let dotwCount = 0;
    const menuIds = [...Array(22).keys()].slice(1, 22);
    const daysOfTheWeek = ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
      <Container>
        <Row>
            <Col md={3}><Label for="DaysOfTheWeek">Days Of the week</Label></Col>
            <Col md={3} ><Label for="Breakfast">Breakfast</Label></Col>
            <Col md={3} ><Label for="Lunch">Lunch</Label></Col>
            <Col md={3} ><Label for="Dinner">Dinner</Label></Col>
        </Row>
x
        {props.meals &&
          menuIds.map((id) => {
            if (id % 3 === 1) {
                dotwCount += 1
              return (
                <Row form key={uuidv4()}>
                    <Col md={3}>
                        <Label for={daysOfTheWeek[dotwCount]}>{daysOfTheWeek[dotwCount]}</Label>
                    </Col>
                    <Col md={3} >
                        <SelectMeal
                            meals={props.meals}
                            onMealSelection={props.onMealSelection}
                            menuId={id}
                        />
                    </Col>
                    <Col md={3}>
                        <SelectMeal
                            meals={props.meals}
                            onMealSelection={props.onMealSelection}
                            menuId={id += 1}
                        />
                    </Col>
                    <Col md={3}>
                        <SelectMeal
                            meals={props.meals}
                            onMealSelection={props.onMealSelection}
                            menuId={id += 1}
                        />
                    </Col>
                </Row>
              );
              
            }
            
            return null;
          })}
          
          
      </Container>
    );
}

export default FormSelectMeal;
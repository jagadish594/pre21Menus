import React from 'react';
import {Form, Label, Col, Row, FormText} from 'reactstrap';
import SelectMeal from './SelectMeal';
import { v4 as uuidv4 } from 'uuid';

const FormSelectMeal = (props) => {
    const menuIds = [...Array(22).keys()].slice(1, 22);
    return (
      <div>
        {props.meals &&
          menuIds.map((id) => {
            if (id % 3 === 1) {
              return (
                <Row form key={uuidv4()}>
                    <Col md={2} >
                        <SelectMeal
                            meals={props.meals}
                            onMealSelection={props.onMealSelection}
                            menuId={id}
                        />
                    </Col>
                    <Col md={2}>
                        <SelectMeal
                            meals={props.meals}
                            onMealSelection={props.onMealSelection}
                            menuId={id += 1}
                        />
                    </Col>
                    <Col md={2}>
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
      </div>
    );
}

export default FormSelectMeal;
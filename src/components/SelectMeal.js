import React from "react";
import { Input } from 'reactstrap';
const SelectMeal = props => {
  return (
      <Input type="select" onClick={props.onMealSelection(props.menuId)}>
        {props.meals &&
          props.meals.map(meal => (
            <option key={meal.id} value={meal.id}>
              {meal.name}
            </option>
          ))}
      </Input>
  );
};

export default SelectMeal;
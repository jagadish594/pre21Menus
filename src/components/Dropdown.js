import React from "react";

const Dropdown = props => {
  return (
    <select onChange={props.onMealSelection}>
      {props.meals &&
        props.meals.map(meal => (
          <option key={meal.id} value={meal.id}>
            {meal.name}
          </option>
        ))}
    </select>
  );
};

export default Dropdown;
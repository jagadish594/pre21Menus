import React from 'react';
import './App.css';
import { connect } from "react-redux";
import {Form, FormGroup, Label, Col, Row, FormText} from 'reactstrap';
import FormSelectMeal from './components/FormSelectMeal';

const App = (props) =>{
  return (
    <div className="App">
      <h1>Meal Planner</h1>
      <Form>
        <FormSelectMeal meals={props.meals} onMealSelection={props.onMealSelection}/>
      </Form>      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    meals: state.meals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMealSelection: (menuId) => (event) =>
      dispatch({
        type: "SELECT_MEAL",
        mealId: event.target.value,
        menuId: menuId
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

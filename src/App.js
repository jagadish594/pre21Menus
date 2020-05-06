import React, {useState, useMemo} from 'react';
import './App.css';
import { connect } from "react-redux";
import SelectMeal from "./components/SelectMeal";
import Display from './components/Display';
import {Form, FormGroup, Label, Col, Row, FormText} from 'reactstrap';

const App = (props) =>{
  const [mealId, setId] = useState(0);
  const [mealName, setName] = useState("");
  const [menuId, setMenuId] = useState(0);
  useMemo(() =>{
    setId(props.mealId);
    setName(props.mealName);
    setMenuId(props.menuId);
  }, [props.mealId, props.mealName, props.menuId])

  return (
    <div className="App">
      <h1>Meal Planner</h1>
      <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <SelectMeal meals={props.meals} onMealSelection={props.onMealSelection} menuId="1" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <SelectMeal meals={props.meals} onMealSelection={props.onMealSelection} menuId="2" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <SelectMeal meals={props.meals} onMealSelection={props.onMealSelection} menuId="3" />
            </FormGroup>
          </Col>
        </Row>



      </Form>

      <Display mealId = {mealId} mealName={mealName} menuId={menuId} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mealDetails: state.mealDetails,
    mealId: state.mealId,
    mealName: state.mealName,
    meals: state.meals,
    menuId: state.menuId
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

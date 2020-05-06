import React, {useState, useMemo} from 'react';
import './App.css';
import { connect } from "react-redux";
import SelectMeal from "./components/SelectMeal";
import Display from './components/Display';

const App = (props) =>{
  const [mealId, setId] = useState(0);
  const [mealName, setName] = useState("");

  useMemo(() =>{
    setId(props.mealId);
    setName(props.mealName);
  }, [props.mealId, props.mealName])

  return (
    <div className="App">
      <h1>Meal Planner</h1>
      <SelectMeal meals={props.meals} onMealSelection={props.onMealSelection} />
      <Display mealId = {mealId} mealName={mealName} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mealDetails: state.mealDetails,
    mealId: state.mealId,
    mealName: state.mealName,
    meals: state.meals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMealSelection: event =>
      dispatch({
        type: "SELECT_MEAL",
        mealId: event.target.value
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const mealsData = [
    {
      id: "1",
      name: "Idly+CoconutChutney"
    },
    {
      id: "2",
      name: "Dosa+CoconutChutney"
    },
    {
      id: "3",
      name: "Dosa+TomatoChutney"
    },
    {
      id: "4",
      name: "Pongal+CoconutChutney"
    },
    {
      id: "5",
      name: "Chappathi+Kuruma"
    }
  ];
  
  const initialState = {
    meals: mealsData,
    mealId: 0,
    mealName: "defaultMealName"
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "SELECT_MEAL":
        newState.mealId = action.mealId;
        const mealName = newState.meals.filter(
          meal => meal.id === action.mealId
        )[0].name;
        newState.mealName = mealName;
        newState.mealType = action.mealType;
        break;
      default:
        new Error();
    }
    return newState;
  };
  
  export default reducer;
  
const mealsData = [
    {
      mealId: "1",
      name: "Idly + Coconut Chutney"
    },
    {
      mealId: "2",
      name: "Dosa + Coconut Chutney"
    },
    {
      mealId: "3",
      name: "Dosa + Tomato Chutney"
    },
    {
      mealId: "4",
      name: "Pongal + Coconut Chutney"
    },
    {
      mealId: "5",
      name: "Chappathi + Kuruma"
    }
  ];
  
  const initialState = {
    meals: mealsData,
    mealId: 0,
    mealName: "defaultMealName",
    menuId: 0,
    menus: []
  };


  
  const reducer = (state = initialState, action) => {

    const newState = { ...state };

    const updateMenus = (mealId, menuId) => {
      const mealName = newState.meals.filter(
        meal => meal.mealId === action.mealId
      )[0].name;
      if(newState.menus.length > 0){
        //check existing menus, and update
        newState.menus.map(meal =>{
          if(meal.menuId === menuId){
            meal.mealId = mealId;
            meal.mealName = mealName
          }
          return null;
        })

        if(!newState.menus.find(meal => meal.menuId === menuId)){
          newState.menus.push({
            menuId: menuId,
            mealId: mealId,
            mealName: mealName
          })
        }

      }
      else{
        //create new menu in menus
        newState.menus.push({
          menuId: menuId,
          mealId: mealId,
          mealName: mealName
        })
      }
      
      console.log("new state: ", newState);
    }

    switch (action.type) {
      case "SELECT_MEAL":
        updateMenus(action.mealId, action.menuId);
        break;
      default:
        new Error();
    }
    return newState;
  };
  
  export default reducer;
  
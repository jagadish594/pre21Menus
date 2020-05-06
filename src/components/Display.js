import React from "react";

const Display = ({ mealId, mealName, menuId }) => {
  return (
    <div>
      {mealId ? (
        <h2>
          {mealId} - {mealName} -{menuId}
        </h2>
      ) : (
        <h2>Select a meal</h2>
      )}
    </div>
  );
};

export default Display;

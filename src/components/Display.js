import React from "react";

const Display = ({ mealId, mealName }) => {
  return (
    <div>
      {mealId ? (
        <h2>
          {mealId} - {mealName}
        </h2>
      ) : (
        <h2>Select a meal</h2>
      )}
    </div>
  );
};

export default Display;

import React from "react";
import { PiBowlFood } from "react-icons/pi";

const FoodItem = ({ ingredient }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "18px",
        fontFamily: "var(--font-base)",
        marginBottom: "5px",
      }}
    >
      <PiBowlFood style={{ color: "#dcca87" }} />
      <p className='ing_name'>{ingredient}</p>
    </div>
  );
};

export default FoodItem;

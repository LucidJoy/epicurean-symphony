import React, { useState, useEffect, useContext } from "react";

import { SymphonyContext } from "../../context/SymphonyContext";
import "./Dropdown.css";

const Dropdown = ({ options }) => {
  const { selectedItem, setSelectedItem } = useContext(SymphonyContext);

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedItem}
        onChange={handleSelectChange}
        className='dropdown p__opensans'
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <p>Selected Item: {selectedItem}</p> */}
    </div>
  );
};

export default Dropdown;

import React, { useContext } from "react";

import { SymphonyContext } from "../../context/SymphonyContext";
import {
  SubHeading,
  MenuItem,
  Dropdown,
  FoodItem,
  Food,
} from "../../components";
import { images, data } from "../../constants";
import "./MainCourse.css";

const MainCourse = () => {
  const { selectedItem, setSelectedItem, restaurantData, mainOptions } =
    useContext(SymphonyContext);

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits you palatte' />
        <h1 className='headtext__cormorant'>{selectedItem}</h1>
      </div>

      <div
        className='app__specialMenu-menu_cocktails flex__center'
        style={{ color: "white" }}
      >
        <Dropdown
          title='select'
          options={[
            "Artisanal Appetizers",
            "Global Fusion Entrees",
            "Epicurean Indulgences",
          ]}
        />
      </div>

      <div className='app__specialMenu-menu'>
        <Food tag={selectedItem} />
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>
    </div>
  );
};

export default MainCourse;

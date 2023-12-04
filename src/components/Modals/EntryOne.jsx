import React, { useContext } from "react";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { SymphonyContext } from "../../context/SymphonyContext";
import { SubHeading, MenuItem, FoodItem } from "..";
import { images, data } from "../../constants";

const EntryOne = () => {
  const { restaurantData, setEntryOneModal } = useContext(SymphonyContext);

  return (
    <div className='app__specialMenu-modal glass'>
      <div className='app__specialMenu-modal_main'>
        <MdOutlineRestaurantMenu
          fontSize={27}
          onClick={() => setEntryOneModal(false)}
          className='overlay__close'
        />

        <div style={{ flex: 1 }}>
          <img src={images.tikka2} alt='risotto2' width='100%' height='100%' />
        </div>

        <div
          style={{
            flex: 1,
            padding: "15px",
            position: "relative",
            borderRight: "1px solid #423d28",
          }}
        >
          <SubHeading
            title={restaurantData?.menu?.categories[1]?.items[0]?.name}
          />

          <p className='app__specialMenu-desc'>
            {restaurantData?.menu?.categories[1]?.items[0]?.description}
          </p>

          <div className='app__specialMenu-rate p__cormorant'>
            Rating:
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
              <FaRegStar />
            </div>
          </div>

          <p className='app__specialMenu-avail'>
            Experience the delightful blend of tender{" "}
            <span style={{ color: "#dcca87", fontWeight: "bold" }}>
              Saffron-Spiced Chicken Tikka
            </span>{" "}
            in a fragrant tomato curry, paired with fluffy basmati rice for a
            culinary delight.
          </p>

          <p className='app__specialMenu-price p__cormorant'>
            ${restaurantData?.menu?.categories[1]?.items[0]?.price}
          </p>
        </div>

        <div style={{ flex: 1, padding: "15px" }}>
          <SubHeading title='Ingredients' />

          <div style={{ color: "white" }}>
            {restaurantData?.menu?.categories[1]?.items[0]?.ingredients?.map(
              (ingredient) => (
                <FoodItem ingredient={ingredient} />
              )
            )}
          </div>

          <div style={{ marginTop: "30px" }}>
            <SubHeading title='Nutritional Info' />

            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <MenuItem
                title='Calories'
                data={
                  restaurantData?.menu?.categories[1]?.items[0]
                    ?.nutritional_info?.calories
                }
              />
              <MenuItem
                title='Protein'
                data={
                  restaurantData?.menu?.categories[1]?.items[0]
                    ?.nutritional_info?.protein
                }
              />
              <MenuItem
                title='Carbohydrates'
                data={
                  restaurantData?.menu?.categories[1]?.items[0]
                    ?.nutritional_info?.carbohydrates
                }
              />
              <MenuItem
                title='Fat'
                data={
                  restaurantData?.menu?.categories[1]?.items[0]
                    ?.nutritional_info?.fat
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryOne;

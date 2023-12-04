import React, { useContext, useState, useEffect } from "react";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { SymphonyContext } from "../../context/SymphonyContext";
import {
  SubHeading,
  MenuItem,
  FoodItem,
  SeasonOne,
  SeasonTwo,
  AppOne,
  AppTwo,
  EntryOne,
  EntryTwo,
  DessertOne,
  DessertTwo,
} from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const {
    restaurantData,
    seasonOneModal,
    setSeasonOneModal,
    seasonTwoModal,
    setSeasonTwoModal,
    appOneModal,
    apptwoModal,
    entryOneModal,
    entryTwoModal,
    dessertOneModal,
    dessertTwoModal,
  } = useContext(SymphonyContext);

  useEffect(() => {
    document.body.classList.toggle(
      "modal-open",
      seasonOneModal ||
        seasonTwoModal ||
        appOneModal ||
        apptwoModal ||
        entryOneModal ||
        entryTwoModal ||
        dessertOneModal ||
        dessertTwoModal
    );

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [
    seasonOneModal,
    seasonTwoModal,
    appOneModal,
    apptwoModal,
    entryOneModal,
    entryTwoModal,
    dessertOneModal,
    dessertTwoModal,
  ]);

  return (
    <>
      <div className='app__specialMenu flex__center section__padding' id='menu'>
        {seasonOneModal && <SeasonOne />}
        {seasonTwoModal && <SeasonTwo />}
        {appOneModal && <AppOne />}
        {apptwoModal && <AppTwo />}
        {entryOneModal && <EntryOne />}
        {entryTwoModal && <EntryTwo />}
        {dessertOneModal && <DessertOne />}
        {dessertTwoModal && <DessertTwo />}

        <div className='app__specialMenu-title'>
          <SubHeading title='A Culinary Journey Through the Seasons' />
          <h1 className='headtext__cormorant'>
            {restaurantData?.menu?.seasonal_menu?.name}
          </h1>
        </div>

        <div className='app__specialMenu-menu'>
          <div className='app__specialMenu-menu_wine flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.seasonal_menu?.items[0]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.risotto}
                width='100%'
                height='100%'
                alt='risotto'
                style={{
                  border: "1px solid #DCCA87",
                  maxHeight: "420px",
                  objectFit: "cover",
                  minHeight: "420px",
                }}
              />

              <p
                className='app__specialMenu-know_more'
                onClick={() => {
                  setSeasonOneModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>

          <div className='app__specialMenu-menu_cocktails flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.seasonal_menu?.items[1]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.sorbet}
                width='100%'
                height='100%'
                alt='risotto'
                style={{
                  border: "1px solid #DCCA87",
                  maxHeight: "420px",
                  objectFit: "cover",
                  minHeight: "420px",
                }}
              />

              <p
                className='app__specialMenu-know_more'
                onClick={() => {
                  setSeasonTwoModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>
        </div>

        {/* <div style={{ marginTop: "15px" }}>
          <button type='button' className='custom__button'>
            View More
          </button>
        </div> */}
      </div>
    </>
  );
};

export default SpecialMenu;

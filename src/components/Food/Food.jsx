import React, { useContext, useState, useEffect } from "react";

import { SymphonyContext } from "../../context/SymphonyContext";
import "./Food.css";
import { images, data } from "../../constants";

const Food = ({ tag }) => {
  const {
    restaurantData,
    setSeasonOneModal,
    setSeasonTwoModal,
    setAppOneModal,
    setApptwoModal,
    setEntryOneModal,
    setEntryTwoModal,
    setDessertOneModal,
    setDessertTwoModal,
  } = useContext(SymphonyContext);

  return (
    <>
      {tag == "Artisanal Appetizers" && (
        <div className='app__specialMenu-menu'>
          <div className='app__specialMenu-menu_wine flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.categories[0]?.items[0]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.mangotango}
                width='100%'
                height='100%'
                alt='mangotango'
                style={{
                  border: "1px solid #DCCA87",
                  maxHeight: "420px",
                  minHeight: "420px",
                  objectFit: "cover",
                }}
              />

              <p
                className='app__specialMenu-know_more'
                onClick={() => {
                  setAppOneModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>

          <div className='app__specialMenu-menu_cocktails flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.categories[0]?.items[1]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.truffle}
                width='100%'
                height='100%'
                alt='truffle'
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
                  setApptwoModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>
        </div>
      )}

      {tag == "Global Fusion Entrees" && (
        <div className='app__specialMenu-menu'>
          <div className='app__specialMenu-menu_wine flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.categories[1]?.items[0]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.tikka}
                width='100%'
                height='100%'
                alt='tikka'
                style={{
                  border: "1px solid #DCCA87",
                  maxHeight: "420px",
                  minHeight: "420px",
                  objectFit: "cover",
                }}
              />

              <p
                className='app__specialMenu-know_more'
                onClick={() => {
                  setEntryOneModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>

          <div className='app__specialMenu-menu_cocktails flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.categories[1]?.items[1]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.ribeye}
                width='100%'
                height='100%'
                alt='ribeye'
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
                  setEntryTwoModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>
        </div>
      )}

      {tag == "Epicurean Indulgences" && (
        <div className='app__specialMenu-menu'>
          <div className='app__specialMenu-menu_wine flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.categories[2]?.items[0]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.cheesecake}
                width='100%'
                height='100%'
                alt='cheesecake'
                style={{
                  border: "1px solid #DCCA87",
                  maxHeight: "420px",
                  minHeight: "420px",
                  objectFit: "cover",
                }}
              />

              <p
                className='app__specialMenu-know_more'
                onClick={() => {
                  setDessertOneModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>

          <div className='app__specialMenu-menu_cocktails flex__center'>
            <p className='app__specialMenu-menu_heading'>
              {restaurantData?.menu?.categories[2]?.items[1]?.name}
            </p>
            <div
              className='app__specialMenu-menu_items'
              style={{ position: "relative" }}
            >
              <img
                src={images.choco}
                width='100%'
                height='100%'
                alt='choco'
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
                  setDessertTwoModal(true);
                }}
              >
                Know More
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Food;

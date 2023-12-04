import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SymphonyContext = createContext();

export const SymphonyProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [seasonOneModal, setSeasonOneModal] = useState(false);
  const [seasonTwoModal, setSeasonTwoModal] = useState(false);
  const [appOneModal, setAppOneModal] = useState(false);
  const [apptwoModal, setApptwoModal] = useState(false);
  const [mainOptions, setMainOptions] = useState([]);
  const [entryOneModal, setEntryOneModal] = useState(false);
  const [entryTwoModal, setEntryTwoModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState("Artisanal Appetizers");

  useEffect(() => {
    if (restaurantData) {
      const firstThreeCategoryNames = restaurantData?.menu?.categories
        .slice(0, 3)
        .map((category) => category?.name);

      setMainOptions(firstThreeCategoryNames);
    }
  }, [restaurantData]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/restaurant")
      .then((response) => {
        setRestaurantData(response.data.restaurant);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <SymphonyContext.Provider
      value={{
        restaurantData,
        seasonOneModal,
        setSeasonOneModal,
        seasonTwoModal,
        setSeasonTwoModal,
        mainOptions,
        setMainOptions,
        selectedItem,
        setSelectedItem,
        appOneModal,
        setAppOneModal,
        apptwoModal,
        setApptwoModal,
        entryOneModal,
        setEntryOneModal,
        entryTwoModal,
        setEntryTwoModal,
      }}
    >
      {children}
    </SymphonyContext.Provider>
  );
};

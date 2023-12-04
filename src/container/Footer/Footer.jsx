import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Map } from "react-map-gl";
import { ScatterplotLayer, LineLayer } from "@deck.gl/layers";
import DeckGL, { GeoJsonLayer } from "deck.gl";

import { SymphonyContext } from "../../context/SymphonyContext";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibHVjaWRqb3kiLCJhIjoiY2xwcDJjN2h3MG5ydDJvbzUydmY3Mng4ZyJ9.yRqVW08dUUMtXjzjtlqfOQ";
const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  latitude: 40.7128,
  longitude: -74.006,
  zoom: 15,
  bearing: 0,
  pitch: 30,
};

const Footer = () => {
  const { restaurantData } = useContext(SymphonyContext);

  const navigate = useNavigate();

  const onClick = (info) => {
    if (info.object) {
      const link = "https://maps.app.goo.gl/WFvBrtAGKSjETrtr7";
      window.open(link, "_blank");
    }
  };

  const data = [
    { sourcePosition: [-74.006, 40.7128], targetPosition: [-74.006, 40.7128] },
  ];

  const markerData = [{ position: [-74.006, 40.7128], size: 100 }];

  const markerLayer = new ScatterplotLayer({
    id: "marker-layer",
    data: markerData,
    getPosition: (d) => d.position,
    getRadius: (d) => (d.size = 50),
    getColor: [255, 0, 0],
    pickable: true,
    onClick,
  });

  // const layers = [new LineLayer({ id: "line-layer", data })];
  const layers = [new LineLayer({ id: "line-layer", data }), markerLayer];

  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Our Stores</h1>
          <div
            style={{
              width: "350px",
              height: "200px",
              position: "absolute",
              backgroundColor: "red",
              overflow: "hidden",
              marginTop: "250px",
              border: "1px solid #DCCA87",
            }}
          >
            <DeckGL
              width={350}
              height={200}
              initialViewState={INITIAL_VIEW_STATE}
              controller={true}
              layers={layers}
            >
              <Map
                width={350}
                height={200}
                mapStyle={MAP_STYLE}
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
              />
            </DeckGL>
          </div>
        </div>

        <div className='app__footer-links_logo'>
          <p
            className='text-logo'
            style={{ fontSize: "30px", marginBottom: "10px" }}
          >
            {restaurantData?.name}
          </p>
          <p className='p__opensans'>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img
            src={images.spoon}
            alt='spoon_img'
            className='spoon__img'
            style={{ marginTop: 15 }}
          />
          <div className='app__footer-links_icons'>
            <FiFacebook
              onClick={() =>
                window.open(
                  restaurantData?.online_presence?.social_media?.facebook,
                  "_blank"
                )
              }
            />
            <FiTwitter
              onClick={() =>
                window.open(
                  restaurantData?.online_presence?.social_media?.twitter,
                  "_blank"
                )
              }
            />
            <FiInstagram
              onClick={() =>
                window.open(
                  restaurantData?.online_presence?.social_media?.instagram,
                  "_blank"
                )
              }
            />
          </div>

          <div style={{ marginBottom: "-25px" }}>
            <p className='p__opensans'>+1 212-344-1230</p>
            <p className='p__opensans'>+1 212-555-1230</p>
          </div>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00am -11:00 pm</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>
          2023 {restaurantData?.name}. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

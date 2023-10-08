import React, { useState, StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Carousel from "react-simply-carousel";
import leSoir from "./le-soir.svg";
import leFigaro from "./le-figaro.svg";
import marieClaire from "./marie-claire.svg";
import trends from "./trends.svg";
import "./styles.css";

console.log({ leSoir });

const pressSvgs = [
  {
    index: 1,
    src: leSoir,
    alt: "leSoir"
  },
  {
    index: 2,
    src: leFigaro,
    alt: "leFigaro"
  },
  {
    index: 3,
    src: marieClaire,
    alt: "marieClaire"
  },
  {
    index: 4,
    src: trends,
    alt: "trends"
  }
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            display: "flex",
            flexFlow: "wrap",
            boxSizing: "border-box",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
          }
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        autoplayDelay={1500}
        speed={500}
        autoplay
        infinite
        easing={"ease-in"}
        disableSwipeByMouse
        disableSwipeByTouch
        preventScrollOnSwipe
        centerMode
        responsiveProps={[
          {
            itemsToShow: 3,
            maxWidth: 1007
          },
          {
            itemsToShow: 4,
            minWidth: 1008
          }
        ]}
        forwardBtnProps={{
          show: false
        }}
        backwardBtnProps={{
          show: false
        }}
        itemsListProps={{
          style: {
            height: "70px"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 6,
              width: 6,
              borderRadius: "3px",
              background: "#717171",
              border: 0,
              marginRight: "8px",
              padding: "0",
              transition: "width .5s",
              cursor: "pointer"
            }
          },
          activeItemBtnProps: {
            style: {
              transition: "width .5s",
              height: 6,
              width: 20,
              borderRadius: "3px",
              background: "#717171",
              border: 0,
              marginRight: "8px",
              padding: "0",
              cursor: "pointer"
            }
          },
          containerProps: {
            className: "dotsNavContainer",
            style: {
              marginTop: "26px"
            }
          }
        }}
      >
        {pressSvgs.map((pressSVG) => (
          <div
            key={pressSVG.index}
            style={{
              textAlign: "center"
            }}
          >
            <img
              src={pressSVG.src}
              alt={pressSVG.alt}
              width="200"
              height="70"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

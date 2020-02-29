import React, { useRef, useReducer } from "react";
import immer from "immer";

import { TrackType, StateType, ActionTypes } from "types";
import css from "./Tile.module.css";
import TileTools from "components/Tile/TileTools";

type TileType = {
  data: TrackType[];
};

const handleNewLines = (string: String) => {
  return string.split("\n").map((string, i, ogArr) => {
    if (ogArr.length - 1 > i) {
      return (
        <span key={i}>
          {string}
          <br />
        </span>
      );
    }
    return string;
  });
};

const initialState = {
  showImg: false,
  isFeature: false,
  feature: "Enter feature..."
};

const reducer = (state: StateType, action: ActionTypes) => {
  return immer(state, draftState => {
    switch (action.type) {
      case "showImage/set":
        draftState.showImg = action.payload;
        break;
    }
  });
};

const Tile = (props: TileType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const tileRef = useRef<null | HTMLElement>(null);
  const imgContainerRef = useRef<null | HTMLDivElement>(null);
  const addImage = (imgEl: HTMLImageElement) => {
    dispatch({ type: "showImage/set", payload: true });
    if (imgContainerRef.current != null) {
      imgContainerRef.current.innerHTML = "";
      const overlayEl = document.createElement("div");
      overlayEl.classList.add(css.overlay);
      imgContainerRef.current.appendChild(overlayEl);
      imgContainerRef.current.appendChild(imgEl);
    }
  };
  const removeImage = () => {
    dispatch({ type: "showImage/set", payload: false });
    if (imgContainerRef.current != null) {
      imgContainerRef.current.innerHTML = "";
    }
  };
  return (
    <>
      <section
        ref={tileRef}
        className={`${css.container} ${state.showImg ? css.showImg : ""}`}
      >
        <div ref={imgContainerRef} className={css.image}></div>
        {state.isFeature && <div>{state.feature}</div>}
        {props.data.map((track, i) => (
          <div key={i} className={css.track}>
            <div className={css.main}>
              <span className={css.artist}>
                {handleNewLines(track.Artist)} -
              </span>{" "}
              <span className={css.song}>{handleNewLines(track.Song)}</span>
            </div>
            <div className={css.label}>({track.Label})</div>
          </div>
        ))}
      </section>
      <TileTools
        domEl={tileRef.current}
        addImage={addImage}
        removeImage={removeImage}
        dispatch={dispatch}
      />
    </>
  );
};

export default Tile;

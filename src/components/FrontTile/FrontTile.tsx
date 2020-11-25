import React, { useRef, useReducer } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import immer from "immer";

import css from "./FrontTile.module.css";
import { fileName } from "components/Tile/Tile";

type StateType = {
  date: string;
  features: string;
  hasBackground: boolean;
};

type ActionType =
  | { type: "feature/set"; payload: string }
  | { type: "date/set"; payload: string }
  | { type: "background/toggle" };

const formatDate = (date: string) => {
  const dateArr = date.split("-").map((str) => parseInt(str));
  const dateObj = new Date(dateArr[0], --dateArr[1], dateArr[2]);
  return new Intl.DateTimeFormat("en-GB", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })
    .format(dateObj)
    .replace(/\//g, "-");
};

const initDate = () => {
  const date = new Date();
  // https://gomakethings.com/setting-a-date-input-to-todays-date-with-vanilla-js/
  return (
    date.getFullYear().toString() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
};

const reducer = (state: StateType, action: ActionType) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case "feature/set":
        draft.features = action.payload;
        break;
      case "date/set":
        draft.date = action.payload;
        break;
      case "background/toggle":
        draft.hasBackground = !state.hasBackground;
        break;
      default:
        break;
    }
  });
};

const intialState = {
  date: initDate(),
  features: "Here's a feature \n another",
  hasBackground: true,
};

const TileFront = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const imgContainerRef = useRef<null | HTMLDivElement>(null);
  const tileRef = useRef<null | HTMLElement>(null);
  const addImage = (imgEl: HTMLImageElement) => {
    if (imgContainerRef.current != null) {
      imgContainerRef.current.innerHTML = "";
      const overlayEl = document.createElement("div");
      overlayEl.classList.add(css.overlay);
      imgContainerRef.current.appendChild(overlayEl);
      imgContainerRef.current.appendChild(imgEl);
    }
  };

  return (
    <>
      <h3 className={css.heading}>Front tile</h3>
      <section
        className={`${css.container} ${
          state.hasBackground ? css.hasBackground : ""
        }`}
        ref={tileRef}
      >
        <div ref={imgContainerRef} className={css.image}></div>
        <div className={css.main}>
          <div className={css.date}>{formatDate(state.date)}</div>
          <div className={css.title}>
            <span>
              B<span className={css.drop}>E</span>NJI B.
            </span>
            <span>
              TR
              <span className={css.drop}>A</span>CKLIST
            </span>
          </div>
          <div className={css.features}>{state.features}</div>
        </div>
      </section>
      <div className={css.tools}>
        <button
          onClick={() => {
            if (tileRef.current != null) {
              domtoimage.toBlob(tileRef.current).then(function (blob: Blob) {
                const dateArr = state.date
                  .split("-")
                  .map((str) => parseInt(str));
                const dateObj = new Date(dateArr[0], --dateArr[1], dateArr[2]);
                saveAs(blob, fileName(dateObj, 1));
              });
            }
          }}
        >
          Convert to .png
        </button>
        <br />
        <label htmlFor="image">Background image: </label>
        <input
          id="image"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.files != null && target.files.length > 0) {
              const imageBlob = target.files[0];
              const image = document.createElement("img");
              image.src = URL.createObjectURL(imageBlob);
              addImage(image);
            }
          }}
        />
        <br />
        <label>
          Features:{" "}
          <textarea
            rows={3}
            value={state.features}
            onChange={(e) => {
              const target = e.target as HTMLTextAreaElement;
              dispatch({ type: "feature/set", payload: target.value });
            }}
          />
        </label>
        <br />
        <label>
          Date:{" "}
          <input
            type="date"
            value={state.date}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.value !== "") {
                dispatch({ type: "date/set", payload: target.value });
              } else {
                dispatch({ type: "date/set", payload: initDate() });
              }
            }}
          />
        </label>
        <label>
          Background:
          <input
            type="checkbox"
            checked={state.hasBackground}
            onChange={() => {
              dispatch({ type: "background/toggle" });
            }}
          />
        </label>
      </div>
    </>
  );
};

export default TileFront;

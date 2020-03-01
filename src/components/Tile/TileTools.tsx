import React from "react";
import { saveAs } from "file-saver";

import { ActionTypes } from "types";
import css from "./Tile.module.css";

type TileToolsType = {
  addImage: (imgEl: HTMLImageElement) => void;
  removeImage: () => void;
  dispatch: React.Dispatch<ActionTypes>;
  isFeature: Boolean;
  feature: string;
  renderImage: () => void;
};

const TileTools = (props: TileToolsType) => (
  <section className={css.tools}>
    <button
      onClick={() => {
        props.renderImage();
      }}
    >
      Convert to .png
    </button>
    {" - "}
    <button
      onClick={() => {
        props.dispatch({ type: "isFeature/set", payload: !props.isFeature });
      }}
    >
      Toggle feature
    </button>
    <br />
    {props.isFeature && (
      <>
        <label htmlFor="image">Background image</label>
        <input
          id="image"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={e => {
            const target = e.target as HTMLInputElement;
            if (target.files != null && target.files.length > 0) {
              const imageBlob = target.files[0];
              const image = document.createElement("img");
              image.src = URL.createObjectURL(imageBlob);
              props.addImage(image);
            }
          }}
        />
        {" - "}
        <button
          onClick={() => {
            props.removeImage();
          }}
        >
          Remove image
        </button>
        <br />
        <label>
          Feature title:
          <input
            type="text"
            value={props.feature}
            onChange={e => {
              const target = e.target as HTMLInputElement;
              props.dispatch({ type: "feature/set", payload: target.value });
            }}
          />
        </label>
      </>
    )}
  </section>
);

export default TileTools;

import React, { useRef } from "react";

import { TrackType } from "types";
import css from "./Tile.module.css";

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

const Tile = (props: TileType) => {
  const ref = useRef(null);
  console.log(ref.current);
  return (
    <section ref={ref} className={css.container}>
      {props.data.map((track, i) => (
        <div key={i} className={css.track}>
          <div className={css.main}>
            <span className={css.artist}>{handleNewLines(track.Artist)} -</span>{" "}
            <span className={css.song}>{handleNewLines(track.Song)}</span>
          </div>
          <div className={css.label}>({track.Label})</div>
        </div>
      ))}
    </section>
  );
};

export default Tile;

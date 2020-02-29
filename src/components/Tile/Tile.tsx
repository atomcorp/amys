import React from "react";

import { TrackType } from "types";
import css from "./Tile.module.css";

type TileType = {
  data: TrackType[];
};

const Tile = (props: TileType) => (
  <section className={css.container}>
    {props.data.map(track => (
      <div className={css.track}>
        <div className={css.main}>
          <span className={css.artist}>{track.Artist} -</span>{" "}
          <span className={css.song}>{track.Song}</span>
        </div>
        <div className={css.label}>({track.Label})</div>
      </div>
    ))}
  </section>
);

export default Tile;

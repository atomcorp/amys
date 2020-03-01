import React from "react";

import Tile from "components/Tile/Tile";
import TileFront from "components/FrontTile/FrontTile";
import { TrackType } from "types";
import css from "./Tiles.module.css";

type TilesType = {
  data: TrackType[];
};

const Tiles = (props: TilesType) => (
  <section className={css.container}>
    <TileFront />
    {props.data
      .reduce((acc: number[], item) => {
        if (!acc.includes(item.Page)) {
          return [...acc, item.Page];
        }
        return acc;
      }, [])
      .map((page: number, i) => (
        <Tile
          key={i}
          page={page}
          data={props.data.filter(tile => tile.Page === page)}
        />
      ))}
  </section>
);

export default Tiles;

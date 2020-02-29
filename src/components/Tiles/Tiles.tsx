import React from "react";

import Tile from "components/Tile/Tile";
import { TrackType } from "types";

type TilesType = {
  data: TrackType[];
};

const Tiles = (props: TilesType) => (
  <section>
    <div>Tiles</div>
    {props.data
      .reduce((acc: Number[], item) => {
        if (!acc.includes(item.Page)) {
          return [...acc, item.Page];
        }
        return acc;
      }, [])
      .map((page: Number) => (
        <Tile data={props.data.filter(tile => tile.Page === page)} />
      ))}
  </section>
);

export default Tiles;

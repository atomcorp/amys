import React from "react";

import css from "./Tile.module.css";

const TileRadio1 = () => (
  <section className={css.radio1Container}>
    R<span className={css.drop}>a</span>dio 1
    <div className={css.radio1Square}></div>
  </section>
);

export default TileRadio1;

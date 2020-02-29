import React from "react";
import dataJson from "data.json";

import Tiles from "components/Tiles/Tiles";
import { TrackType } from "types";

function App() {
  const data: TrackType[] = dataJson;
  return (
    <div className="App">
      <Tiles data={data} />
    </div>
  );
}

export default App;

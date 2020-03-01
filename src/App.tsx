import React, { useState } from "react";
import csvtojson from "csvtojson";
import fakeData from "data.json";

import Tiles from "components/Tiles/Tiles";
import { TrackType } from "types";
import css from "./App.module.css";

function App() {
  const [data, setData] = useState<TrackType[]>([]);
  return (
    <div className="App">
      <div className={css.heading}>
        <h1 className={css.title}>Amy's App</h1>
        <fieldset className={css.upload}>
          <legend>Upload a CSV file</legend>
          <input
            type="file"
            accept=".csv"
            onChange={e => {
              const target = e.target as HTMLInputElement;
              if (target.files != null && target.files.length > 0) {
                const fileBlob = target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  if (typeof reader.result === "string") {
                    csvtojson()
                      .fromString(reader.result)
                      .then(function(result) {
                        try {
                          setData(
                            result.map(item => ({
                              ...item,
                              Page: parseInt(item.Page)
                            }))
                          );
                        } catch (error) {
                          console.error("invalid data");
                        }
                      });
                  }
                };
                reader.readAsText(fileBlob);
              }
            }}
          />
          {data.length > 0 && (
            <button
              onClick={() => {
                setData([]);
              }}
            >
              Clear tiles
            </button>
          )}
          <br />
          Headers must be <code>Song,Artist,Label,Page</code>
        </fieldset>
      </div>
      <Tiles data={fakeData} />
    </div>
  );
}

export default App;

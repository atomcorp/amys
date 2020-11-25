export type TrackType = {
  Song: string;
  Artist: string;
  Label: string;
  Page: number;
};

export type StateType = {
  showImg: Boolean;
  isFeature: Boolean;
  feature: string;
  hasBackground: boolean;
};

export type ActionTypes =
  | { type: "showImage/set"; payload: Boolean }
  | { type: "isFeature/set"; payload: Boolean }
  | { type: "feature/set"; payload: string }
  | { type: "background/toggle" };

export type TrackType = {
  Song: String;
  Artist: String;
  Label: String;
  Page: Number;
};

export type StateType = {
  showImg: Boolean;
  isFeature: Boolean;
  feature: String;
};

export type ActionTypes = { type: "showImage/set"; payload: Boolean };

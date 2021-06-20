const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWloaXJpYW4iLCJhIjoiY2txMHNjOWwxMDF4bDJycGZpZ3ljNzIweiJ9.xiFM-gCI3x-FsckDMSreDw&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to coonect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;

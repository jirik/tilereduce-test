'use strict';


module.exports = function(data, tile, writeData, done) {
  var count = {};
  var sources = global.mapOptions.sources;
  var sourceName = sources[0];

  var source = data[sourceName];
  var keys = Object.keys(source);

  keys.forEach(layerName => {
    count[layerName] = source[layerName].length;
  });

  done(null, count);
};

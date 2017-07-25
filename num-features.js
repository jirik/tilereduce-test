var TileReduce = require('@mapbox/tile-reduce');
var turf = require('turf');

var opts = {
  bbox: [19.1217,39.6447,21.0572,42.6611],
  zoom: 7,
  sources: [
    {
      name: 'omt-3.5',
      mbtiles: __dirname+'/data/albania-v3.5.mbtiles',
      raw: true
    }
  ],
  mapOptions: {
    sources: ['omt-3.5']
  },
  map: __dirname+'/num-features-map.js'
};

var features = {};

TileReduce(opts)
.on('reduce', function(result) {
  Object.keys(result).forEach(layerName => {
    features[layerName]=(features[layerName] || 0) + result[layerName];
  });
})
.on('end', function(error) {
  console.log('Number of features:', features);
});

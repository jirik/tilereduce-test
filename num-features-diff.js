var TileReduce = require('@mapbox/tile-reduce');
var turf = require('turf');

var opts = {
  bbox: [19.1217,39.6447,21.0572,42.6611],
  zoom: 7,
  sources: [
    {
      name: 'omt-3.6.1',
      mbtiles: __dirname+'/data/albania-v3.6.1.mbtiles',
      raw: true
    },
    {
      name: 'omt-3.5',
      mbtiles: __dirname+'/data/albania-v3.5.mbtiles',
      raw: true
    }
  ],
  mapOptions: {
    // sources: ['omt-3.6']
    sources: ['omt-3.6.1', 'omt-3.5']
  },
  // map: __dirname+'/geom-info.js'
  map: __dirname+'/num-features-diff-map.js'
};

var features = {};

TileReduce(opts)
// .on('map', function (tile, workerId) {
// 	console.log('about to process ' + JSON.stringify(tile) +' on worker '+workerId);
// })
.on('reduce', function(result) {
  Object.keys(result).forEach(layerName => {
    var cnt = result[layerName];
    if(cnt!==0) {
      if(layerName in features) {
        var obj = features[layerName];
      } else {
        obj = {};
        features[layerName] = obj;
      }
    }
    if(cnt>0) {
      obj['+'] = (obj['+']||0) + cnt;
    } else if (cnt<0) {
      obj['-'] = (obj['-']||0) - cnt;
    }

  });
})
.on('end', function(error) {
  console.log('Number of differences:', features);
});

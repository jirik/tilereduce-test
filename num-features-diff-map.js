'use strict';


module.exports = function(data, tile, writeData, done) {
  var diff = {};
  var sources = global.mapOptions.sources;
  var srcName1 = sources[0];
  var srcName2 = sources[1];

  var src1 = data[srcName1];
  var src2 = data[srcName2];
  var keys = Object.keys(src1);
  keys = [...new Set(keys.concat(Object.keys(src2)))];

  keys.forEach(layerName => {
    var cnt1 = src1[layerName] ? src1[layerName].length : 0;
    var cnt2 = src2[layerName] ? src2[layerName].length : 0;
    diff[layerName] = cnt1-cnt2;
  });
  done(null, diff);
};

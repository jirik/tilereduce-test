# tilereduce-test

## Number of features
Count number of features
- per tile
- per layer

`node num-features.js`

Output
```
Starting up 8 workers... Job started.
Processing 4 tiles.
4 tiles processed in 0s.
Number of features: { water: 31,
  landuse: 49,
  mountain_peak: 120,
  park: 16,
  boundary: 713,
  transportation: 106,
  transportation_name: 6,
  place: 20,
  waterway: 6 }
```


## Difference of number of features
Count difference of number of features between two mbtiles files
- per tile
- per layer

`node num-features-diff.js`

Output
```
Starting up 8 workers... Job started.
Processing 4 tiles.
4 tiles processed in 0s.
Number of differences: { water: { '+': 7 },
  park: { '+': 6 },
  transportation: { '+': 364 } }
```

# read-csv

### Installation
```
yarn add read-csv
```

### read( path, skip );
Parameters
* `path` - path to csv file
* `skip` - array of columns you want to skip by name

Returns an object containing 
* `data` - array of objects i.e. your data 
* `minMax` - object containing the min and max values for each column, good for data normalization

### Example Usage
```
timestamp, high, low
1563494520000, 10660.0,10680.15
1563494460000, 10680.15,10680.19
1563494400000, 10680.19,10680.15
1563494340000, 10660.0,10680.15
```
```javascript
const csv = require('read-csv');

(async()=>{
    let results = await csv.read('./your-file.csv', ['timestamp']);
    // results = {data, minMax}
    // results.data = [{high:10660.0, low:10680.15},...]
    // results.minMax = {high: {min: 10660.0, max: 10680.19} low:{...} }
})()
```



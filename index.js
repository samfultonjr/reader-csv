const lineReader = require('line-reader');

function read(path, skip){
    let data = [];
    let lineNumber = 0;
    let cols;
    let minMaxs = {};
    if(!skip)skip = [];
    return new Promise((resolve, reject) => {
    lineReader.eachLine(path, function(line, last) {
        lineNumber++;
        if(lineNumber === 1){
            cols = line.split(',');     
            for (let index = 0; index < cols.length; index++) {
                const name = cols[index];
                if(!skip.includes(name)){
                minMaxs[name] = {min:Infinity, max:-Infinity};
            }
            }
        }else{
            let dp = line.split(',');
            let dpObj = {};
            for (let index = 0; index < cols.length; index++) {
                const name = cols[index];
                if(!skip.includes(name)){
                    let val = dp[index];
                    if(isInt(val)){val = parseFloat(val)};
                    dpObj[name] = val;
                    if(val > minMaxs[name].max)minMaxs[name].max = val;
                    if(val < minMaxs[name].min)minMaxs[name].min = val;
                }
            }
            data.push(dpObj);
            if(last) resolve({data, minMaxs});
        }
    });
});

};


function isInt(value) {
    return !isNaN(value) && 
           parseFloat(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }


  
module.exports={
    read
}


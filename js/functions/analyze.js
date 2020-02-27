 function analyze(array) {
     if (array.length > 0) {
         return {
             average: array.reduce((total, current) => {
                 return total + current;
             }) / array.length,
             min: Math.min(...array),
             max: Math.max(...array),
             length: array.length,
         };
     }
     return {};
 }
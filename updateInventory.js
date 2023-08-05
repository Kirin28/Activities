
function updateInventory(curStock, newStock) {
  //concat the 2 arrays
  let totalStock = curStock.concat(newStock);

  //create an object in wich every key is a brand we find in the array
  const result = {}
  //{samsung: 10, LG: 15}
  //loop through the concat array
  for(let i = 0; i < totalStock.length; i++){
    let brand = totalStock[i][1];
    let stock = totalStock[i][0];
    //if the brand already exist in the object
    if(result[brand]){
      result[brand] += stock
    } else {
      result[brand] = stock
    }
   }
  console.log(result)
  //create an array from the object keys, sort it then map though it and for each element create an array with the values
  //of the stock that I can access from the result object, and the brand
 return O
  }

currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']];
newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']];

console.log(updateInventory(currentStock, newStock)) //[[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Sony']]
//[Array [25, "HTC"], Array [1000, "Nokia"], Array [50, "Samsung"], Array [33, "Sony"], Array [10, "Apple"], Array [5, "LG"], Array [10, "Sony"], Array [4, "Samsung"], Array [5, "Apple"]]
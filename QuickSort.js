
/*
quicksort()
INPUTS: list( array), min (int), max( int)
OUTPUTS: list( array)
Depends on: None
Implements quicksort. 
To run it, use quickSort([your list of elements])
you don't need to specify min or max yourself (anymore), as instead, it will find the
min and max values by itself. this is especially useful to
start the function.
if you only want to sort part of a list, use quickSort([Your elements],minimum index, maximum index)
*/
function quickSort (list, min = -1, max = -1){
  //debugger;
 
  if(min == -1 && max == -1 && list.length > 2){
    min = 0
    max = list.length - 1;
  }
  if(max < 0 || min < 0 || max <= min ){
    return list; // check there are at least two elements 
  }
  if(min == undefined){
    min = 0;
  }
  const pivot = list[min];
  //console.log("pivot is: ",pivot)
  //console.log(min,max, list[min],list[max])

  var moving = 0;
  var pivotIndex = min;
  for(var i = min+1; i <= max; i++){
    //safetyBool = true
    if(list[i] <= pivot){
      //console.log("Element ", list[i], "is being moved");
      moving = list[i];
      list.splice(i,1);
      list.splice(min,0,moving);
      //console.log(list);
      pivotIndex++;

    }
    //console.log(pivotIndex)
  }

  //console.log("recursing to the left")
  quickSort(list,min,pivotIndex -1 );
  //console.log("recursing to the right")
  quickSort(list,pivotIndex+1, max);

  //console.log(list);
  return list;
}
console.log(quickSort([86,21,3,53,7,53,80,88,16,97,21]))
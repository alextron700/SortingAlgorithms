function selectionSort(list){
    var output = [];
    const len = list.length;
    for(i=0;i<len;i++){
        output.push(Math.min(...list));
        list.splice(list.indexOf(Math.min(...list)),1);
    }
    return(output);
}

console.log(selectionSort([10,-60,20,16,1,6,2,2,67,7]));
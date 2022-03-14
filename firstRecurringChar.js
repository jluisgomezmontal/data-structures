const firstRecurringCharacter = input =>{
  /*for(let i=0;i<input.length;i++){
    for(let j= i+1;j<input.length;j++){
      if(input[i] === input[j]){
        return input[i]
      }
    }
  }
  return undefined
  */
  let hashMap={};
  for(let i= 0;i<input.length;i++){
    // sin undefined regresa el segundo numero en repetirse
    if(hashMap[input[i]] !== undefined ){
      return input[i]
    }else{
      hashMap[input[i]] = i
    }
  }
  return undefined
}

firstRecurringCharacter([8,3,5,9,8,4,4,7])
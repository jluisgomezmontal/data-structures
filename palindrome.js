const getUniqueCharacter =(s)=> {
    // Write your code here    
    let hashMap = {}, res = -1;
        for(let key of s){
            hashMap[key] = (hashMap[key] || 0) +1;
        }
        
        for(let key in hashMap){
            if(hashMap[key] === 1) {
                res = s.indexOf(key);
                break;
            }
        }
        console.log(res)


}
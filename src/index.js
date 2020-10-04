module.exports = function reverse (n) {
    let str = String(n);  
    let array = str.split("");    
    let reversed = array.reverse();
    let joined = reversed.join("");
    if(joined[joined.length -1] == "-"){
        joined = joined.slice(0, (joined.length - 1));
    } else {
        joined = joined;
    }
    let result = joined;
    return result;
}


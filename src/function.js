function main(number) {
    var n = number;
    var combinations = [];
    var s = "";
    updateSign(0, s, 0, n, combinations);

    if(combinations.length == 0) {
        combinations.push("Not Possible");
    }

    var list = '';

    for(let i = 0; i < combinations.length; i++){
        list = list + '(' + combinations[i] + ') ';
    }

    return list;
}

function updateSign(i, s, sum, n, combinations) {
    var t = i;
    var temp = s;
    var zerosum = sum;

    if(t == n && zerosum == 0) {
        combinations.push(s);
    }
    else if (t < n){
        updateSign(t+1, temp + "-" + (t+1).toString(), zerosum - (t+1), n, combinations);
        updateSign(t+1, temp + "+" + (t+1).toString(), zerosum + (t+1), n, combinations);
    }
}

module.exports = {main};
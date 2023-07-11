function decimalToBinary(num) {
    //Write you code here
    let ans = 0;
    const res = [];
    while(num > 0) {
        res.unshift(num % 2);
        // ans = (num % 2) + ans * 10;
        num = Math.floor(num/2);
        // console.log(num, ans);
    }
    for(let i = 0; i < res.length; i++) {
        ans = ans * 10 + res[i];
    }
    return ans;
}

window.decimalToBinary = decimalToBinary;

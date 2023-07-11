function decimalToBinary(num) {
    //Write you code here
	let str = '';

    while(num > 0) {
		str = (num % 2) + str;
        num = Math.floor(num/2);
    }

    return str;
}

window.decimalToBinary = decimalToBinary;

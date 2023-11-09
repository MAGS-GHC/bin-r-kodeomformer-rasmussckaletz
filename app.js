const binaryNumbers = [128, 64, 32, 16, 8, 4, 2, 1];

function bintoip() {
    let binaryToIP = 0;
    let binaryToIPArray = [];
    let binaryToIPValue = document.getElementById("binarytoip").value;
    let validBinary = /^[01.]+$/.test(binaryToIPValue);
    const binaryToIPValueSplit = binaryToIPValue.split(".");
    if (validBinary) {
        for (part in binaryToIPValueSplit) {
            let binaryArrayPart = binaryToIPValueSplit[part];
            for (index in binaryArrayPart) {
                if (Number(binaryArrayPart[index]) === 1) {
                    binaryToIP += binaryNumbers[index];
                }
            }
            binaryToIPArray.push(binaryToIP);
            binaryToIP = 0;
        }
        alert(`IP: ${binaryToIPArray[0]}.${binaryToIPArray[1]}.${binaryToIPArray[2]}.${binaryToIPArray[3]}`);
    } else {
        alert("Error. Acceptable input: 1, 0 and '.'");
    }
}

function iptobin() {
    let ipToBinary = "";
    let ipToBinaryArray = [];
    let ipToBinaryValue = document.getElementById("iptobinary").value;
    let validIP = /^[0123456789.]+$/.test(ipToBinaryValue);
    const ipToBinaryValueSplit = ipToBinaryValue.split(".");
    if (validIP) {
        for (index in ipToBinaryValueSplit) {
            let currentNumber = Number(ipToBinaryValueSplit[index]);
            for (i in binaryNumbers) {
                if (currentNumber >= binaryNumbers[i]) {
                    currentNumber -= binaryNumbers[i];
                    ipToBinary += "1";
                } else {
                    ipToBinary += "0";
                }
            }
            ipToBinaryArray.push(ipToBinary);
            ipToBinary = "";
        }
        alert(`Binary: ${ipToBinaryArray[0]}.${ipToBinaryArray[1]}.${ipToBinaryArray[2]}.${ipToBinaryArray[3]}`);
    } else {
        alert("Error. Acceptable input: Numbers (0-9) and '.'");
    }
}